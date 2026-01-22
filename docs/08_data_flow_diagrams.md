# Data Flow Diagrams

This document describes how data flows through the Career Intelligence Platform from user input to final insights. The goal of these flows is to ensure clarity, traceability, and explainability at every stage of processing.

The diagrams referenced here represent **logical data flow**, not low-level implementation details.

---

## Overview of Data Flow

At a high level, all user interactions follow this pattern:

1. User provides input via the frontend
2. Backend API validates and normalizes the input
3. Intelligence modules perform analysis
4. Results are returned to the frontend as explainable insights

Each major feature follows a variation of this core flow.

---

## Flow 1: User Onboarding and Profile Creation

**Input:**
- Resume upload (PDF or text)
- Manual skill input (optional)
- Career stage and goal selection

**Flow:**
1. User submits inputs via the frontend.
2. Backend API receives and validates the data.
3. Resume text is extracted and normalized.
4. Skills, roles, and experience indicators are derived.
5. A structured user profile is created in memory or lightweight storage.

**Output:**
- Normalized user profile used by all downstream modules.

---

## Flow 2: Skill Gap Analysis

**Input:**
- User profile (skills, experience)
- Target role (and optional companies)

**Flow:**
1. Backend requests role-specific job market data.
2. Intelligence layer extracts frequently required skills.
3. User skills are compared against required skills.
4. Skills are categorized as:
   - existing
   - missing
   - high-priority

**Output:**
- Prioritized skill gap insights with explanations.

---

## Flow 3: ATS Readiness Estimation

**Input:**
- Resume text
- Job description or target role

**Flow:**
1. Resume and job description are parsed.
2. Keywords and skills are extracted.
3. Overlap and coverage metrics are computed.
4. A heuristic readiness score is calculated.
5. Missing or underrepresented terms are identified.

**Output:**
- ATS readiness indicators
- Clear explanation of deductions and gaps

---

## Flow 4: Learning Resource Recommendation

**Input:**
- Missing or prioritized skills
- User experience level

**Flow:**
1. Intelligence layer queries curated learning resource data.
2. Resources are filtered by skill relevance.
3. Results are ranked by difficulty and popularity.
4. Resources are grouped by skill and learning level.

**Output:**
- Actionable learning recommendations linked to skill gaps.

---

## Flow 5: Network Path Finder

**Input:**
- User profile
- Target role or company

**Flow:**
1. Professional connections are modeled as a graph.
2. Backend queries the graph for relevant nodes.
3. Graph traversal algorithms identify low-friction paths.
4. Paths are ranked by relevance and proximity.

**Output:**
- Suggested networking paths with contextual explanations.

---

## Flow 6: Job-to-Profile Matching

**Input:**
- User profile
- Role definitions and skill requirements

**Flow:**
1. User profile is evaluated against multiple roles.
2. Skill coverage and experience alignment are computed.
3. Roles are categorized by proximity:
   - strong fit
   - near fit
   - long-term target

**Output:**
- Role fit categories with explanations of differences.

---

## Fallback and Offline Data Flow

When cloud services are unavailable:

1. Backend detects service limitations.
2. Cached datasets are loaded from local or backup storage.
3. Core analysis modules continue operating in limited mode.
4. Frontend displays calm status messaging.

This ensures continuity of core insights without disruption.

---

## Diagram References

The following visual assets complement these flows:

- User onboarding flow → `flowcharts/user_onboarding_flow.png`
- Skill gap analysis flow → `flowcharts/skill_gap_analysis_flow.png`
- ATS estimator flow → `flowcharts/ats_estimator_flow.png`
- Network path finder flow → `flowcharts/network_path_finder_flow.png`

These diagrams visually represent the logical steps described above.

---

## Closing Note

These data flows prioritize explainability and modularity. Each transformation step is designed to be inspectable and understandable, ensuring that users and developers can trace how insights are produced throughout the system.
