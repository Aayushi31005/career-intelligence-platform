import json
from pathlib import Path

BASE_DATA_PATH = Path("data")


def load_skill_taxonomy():
    path = BASE_DATA_PATH / "skill_taxonomy.json"
    with open(path, "r") as f:
        return json.load(f)


def load_job_descriptions(role_file: str):
    path = BASE_DATA_PATH / "mock_job_descriptions" / role_file
    with open(path, "r") as f:
        return json.load(f)
def load_role_skill_set(role_file: str):
    role_data = load_job_descriptions(role_file)
    skills = set()
    for desc in role_data["descriptions"]:
        skills.update(desc["skills"])
    return skills
def load_learning_resources():
    path = BASE_DATA_PATH / "learning_resources.json"
    with open(path, "r") as f:
        return json.load(f)
def load_network_graph():
    path = BASE_DATA_PATH / "mock_network_graph.json"
    with open(path, "r") as f:
        return json.load(f)