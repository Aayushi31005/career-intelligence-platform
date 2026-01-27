from collections import Counter
from backend.utils.data_loader import load_job_descriptions


ROLE_FILE_MAP = {
    "Backend Software Engineer": "sde_backend.json",
    "Data Analyst": "data_analyst.json",
    "Machine Learning Engineer": "ml_engineer.json",
}


def extract_role_skills(descriptions):
    skills = []
    for desc in descriptions:
        skills.extend(desc.get("skills", []))
    return skills


def assign_importance(skill_freq: Counter):
    if not skill_freq:
        return {}

    max_freq = max(skill_freq.values())
    importance = {}

    for skill, freq in skill_freq.items():
        if freq >= max_freq * 0.75:
            importance[skill] = "must-have"
        elif freq >= max_freq * 0.4:
            importance[skill] = "common"
        else:
            importance[skill] = "nice-to-have"

    return importance


def analyze_skill_gap(payload: dict):
    user_skills = set(payload.get("user_skills", []))
    target_role = payload.get("target_role")

    if target_role not in ROLE_FILE_MAP:
        return {"error": "Unsupported role"}

    role_data = load_job_descriptions(ROLE_FILE_MAP[target_role])
    role_skills = extract_role_skills(role_data.get("descriptions", []))

    skill_frequency = Counter(role_skills)
    importance_map = assign_importance(skill_frequency)

    existing = sorted(user_skills & set(skill_frequency))
    missing = sorted(set(skill_frequency) - user_skills)

    missing_with_priority = [
        {
            "skill": skill,
            "importance": importance_map.get(skill)
        }
        for skill in missing
    ]

    return {
        "role": target_role,
        "existing_skills": existing,
        "missing_skills": missing_with_priority
    }