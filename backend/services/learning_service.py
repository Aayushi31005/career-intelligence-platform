from backend.utils.data_loader import load_learning_resources


def recommend_learning(payload: dict):
    missing_skills = payload.get("missing_skills", [])

    resources_data = load_learning_resources()
    recommendations = {}

    for skill in missing_skills:
        if skill in resources_data:
            recommendations[skill] = sorted(
                resources_data[skill],
                key=lambda x: x.get("popularity_score", 0),
                reverse=True
            )

    return {
        "recommendations": recommendations
    }