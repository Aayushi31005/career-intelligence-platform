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


def find_target_nodes(G, target_role):
    return [
        node for node, data in G.nodes(data=True)
        if data.get("role") == target_role
    ]


def explain_path(G, path):
    if len(path) < 2:
        return "Direct connection"

    start, end = path[0], path[-1]
    end_role = G.nodes[end].get("role")
    relationship = G.edges[path[0], path[1]].get("relationship")

    return f"{relationship.capitalize()} connection working as {end_role}"


def find_network_paths(target_role: str):
    graph_data = load_network_graph()
    G = build_graph(graph_data)

    USER_NODE_ID = "user_1"  # prototype assumption

    if USER_NODE_ID not in G:
        return {"error": "User node not found in network"}

    target_nodes = find_target_nodes(G, target_role)

    paths = []

    for target in target_nodes:
        try:
            shortest_path = nx.shortest_path(G, USER_NODE_ID, target)
            paths.append({
                "path": shortest_path,
                "reason": explain_path(G, shortest_path)
            })
        except nx.NetworkXNoPath:
            continue

    return {
        "target_role": target_role,
        "paths": paths
    }