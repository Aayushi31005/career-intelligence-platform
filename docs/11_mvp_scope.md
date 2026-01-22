# MVP Scope

This document defines the scope of the Minimum Viable Product (MVP) for the Career Intelligence Platform. The MVP is designed to demonstrate core system functionality, architectural thinking, and decision-support value without overengineering or making unrealistic production claims.

The scope is intentionally constrained to balance learning value, clarity, and feasibility.

---

## Purpose of the MVP

The MVP aims to:
- Validate the core idea of career decision support
- Demonstrate system design and data-driven reasoning
- Showcase explainable insights rather than automation
- Serve as a strong portfolio and interview artifact

The MVP is not intended to be a full-scale commercial product.

---

## Included in MVP

### 1. Core Intelligence Modules

The MVP includes simplified but functional versions of all five core modules:

- **Skill Gap Analyzer**  
  Identifies and prioritizes missing skills based on curated job market data.

- **ATS Readiness Estimator (Heuristic)**  
  Provides explainable resume-to-role alignment indicators.

- **Job-to-Profile Matching Engine**  
  Categorizes roles as strong fit, near fit, or long-term target.

- **Learning Resource Recommender**  
  Suggests curated learning resources mapped to identified skill gaps.

- **Network Path Finder (Graph-Based)**  
  Demonstrates intentional networking paths using a synthetic professional graph.

---

### 2. Data and Analysis Scope

- Curated or mock job descriptions
- Predefined skill taxonomy
- Curated learning resource metadata
- Synthetic professional network graph
- Cached datasets for limited offline or backup analysis

No real-time scraping or proprietary data sources are used.

---

### 3. Frontend Experience

- Clean, calm, and minimal interface
- Clear visualization of insights
- Progressive disclosure of information
- Theme support using a curated palette
- Graceful messaging during limited or fallback states

---

### 4. Backend and Infrastructure

- Python-based backend API
- Modular intelligence layer
- Optional cloud deployment for demonstration
- Environment-based configuration
- Basic fallback behavior using cached datasets

---

## Explicitly Out of Scope

The following are intentionally excluded from the MVP:

- Real-time job market scraping
- Proprietary ATS replication
- Automated job applications
- Outreach automation or message generation
- User authentication and account persistence
- Advanced analytics or machine learning models
- Production-grade scalability or availability guarantees

These exclusions ensure ethical integrity and manageable complexity.

---

## Success Criteria for the MVP

The MVP is considered successful if it:

- Clearly demonstrates how users gain career clarity
- Produces explainable and consistent insights
- Reflects strong system and product design thinking
- Is easy to understand and explain in interviews
- Serves as a foundation for future extension

---

## Rationale for Scope Decisions

Scoping decisions are guided by:
- learning objectives
- ethical constraints
- time and resource limitations
- clarity over completeness

The MVP prioritizes depth of reasoning and design quality over feature quantity.

---

## Closing Note

This MVP scope is deliberately conservative. It ensures that the platform remains focused, understandable, and defensible while still showcasing meaningful engineering and product capabilities.
