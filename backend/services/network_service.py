import networkx as nx
from backend.utils.data_loader import load_network_graph


def build_graph(graph_data):
    G = nx.Graph()

    for node in graph_data["nodes"]:
        G.add_node(node["id"], **node)

    for edge in graph_data["edges"]:
        G.add_edge(
            edge["from"],
            edge["to"],
            relationship=edge["relationship"]
        )

    return G


def find_node_by_name(G, name):
    for node_id, data in G.nodes(data=True):
        if data.get("name") == name:
            return node_id
    return None


def explain_path(G, path):
    explanations = []

    for i in range(len(path) - 1):
        src = G.nodes[path[i]]
        dst = G.nodes[path[i + 1]]
        relationship = G.edges[path[i], path[i + 1]]["relationship"]

        explanations.append(
            f"{src['name']} can reach {dst['name']} via {relationship.replace('_', ' ')} "
            f"({dst.get('role')} at {dst.get('company') or dst.get('institution')})"
        )

    return " → ".join(explanations)


def find_network_paths(payload: dict):
    graph_data = load_network_graph()
    G = build_graph(graph_data)

    user_name = payload["user"]["name"]
    target_name = payload["target"]["name"]

    user_node = find_node_by_name(G, user_name)
    target_node = find_node_by_name(G, target_name)

    if not user_node or not target_node:
        return {"error": "User or target not found in network"}

    try:
        path = nx.shortest_path(G, user_node, target_node)
    except nx.NetworkXNoPath:
        return {"paths": []}

    return {
        "user": user_name,
        "target": target_name,
        "path": path,
        "explanation": explain_path(G, path)
    }