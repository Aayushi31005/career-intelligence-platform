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