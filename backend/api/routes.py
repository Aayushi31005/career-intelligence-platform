from fastapi import APIRouter

from backend.services.skill_gap_service import analyze_skill_gap
from backend.services.ats_service import ats_readiness
from backend.services.role_matching_service import match_roles
from backend.services.learning_service import recommend_learning
from backend.services.network_service import find_network_paths

router = APIRouter()

@router.post("/skill-gap")
def skill_gap_endpoint(payload: dict):
    return analyze_skill_gap(payload)

@router.post("/ats-readiness")
def ats_endpoint(payload: dict):
    return ats_readiness(payload)

@router.post("/role-matching")
def role_matching_endpoint(payload: dict):
    return match_roles(payload)

@router.post("/learning")
def learning_endpoint(payload: dict):
    return recommend_learning(payload)

from typing import Dict
from backend.services.network_service import find_network_paths

@router.post("/network/paths")
def network_paths(payload: Dict):
    return find_network_paths(payload)