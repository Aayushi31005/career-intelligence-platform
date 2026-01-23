from backend.utils.data_loader import load_skill_taxonomy, load_role_skill_set

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


def fit_category(coverage: float):
    if coverage >= 0.75:
        return "Strong Fit"
    elif coverage >= 0.5:
        return "Near Fit"
    else:
        return "Long-Term Target"


def match_roles(payload: dict):
    resume_text = payload.get("resume_text", "")
    taxonomy = load_skill_taxonomy()

    resume_skills = normalize_resume_skills(resume_text, taxonomy)

    results = []

    for role, role_file in ROLE_FILE_MAP.items():
        role_skills = load_role_skill_set(role_file)

        if not role_skills:
            continue

        matched = resume_skills & role_skills
        coverage = round(len(matched) / len(role_skills), 2)

        results.append({
            "role": role,
            "skill_coverage": coverage,
            "fit_level": fit_category(coverage)
        })

    return {
        "results": sorted(
            results,
            key=lambda x: x["skill_coverage"],
            reverse=True
        )
    }