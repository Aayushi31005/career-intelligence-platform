from backend.utils.data_loader import load_role_skill_set, load_skill_taxonomy

ROLE_FILE_MAP = {
    "Backend Software Engineer": "sde_backend.json",
    "Data Analyst": "data_analyst.json",
    "Machine Learning Engineer": "ml_engineer.json",
}


def normalize_resume_skills(resume_text: str, taxonomy: dict):
    text = resume_text.lower()
    found_skills = set()

    for skill, meta in taxonomy.items():
        if skill in text:
            found_skills.add(skill)
            continue
        for alias in meta.get("aliases", []):
            if alias in text:
                found_skills.add(skill)
                break

    return found_skills


def readiness_label(coverage: float):
    if coverage >= 0.75:
        return "Strong alignment"
    elif coverage >= 0.5:
        return "Moderate alignment"
    else:
        return "Low alignment"


def ats_readiness(payload: dict):
    resume_text = payload.get("resume_text", "")
    target_role = payload.get("target_role")

    if target_role not in ROLE_FILE_MAP:
        return {"error": "Unsupported role"}

    taxonomy = load_skill_taxonomy()
    resume_skills = normalize_resume_skills(resume_text, taxonomy)

    role_skills = load_role_skill_set(ROLE_FILE_MAP[target_role])

    matched = sorted(resume_skills & role_skills)
    missing = sorted(role_skills - resume_skills)

    coverage = round(len(matched) / len(role_skills), 2) if role_skills else 0.0

    return {
        "role": target_role,
        "skill_coverage": coverage,
        "readiness_level": readiness_label(coverage),
        "matched_skills": matched,
        "missing_skills": missing
    }