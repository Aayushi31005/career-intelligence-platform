# Changelog

All notable changes to this project are documented in this file.

This project follows a learning-first, implementation-driven approach.  
Entries focus on meaningful system, architecture, and UX milestones rather than minor edits.

---

## [0.1.0] – Initial Working Prototype

### Added
- Fully functional backend implementing five independent intelligence modules:
  - Skill Gap Analyzer
  - ATS Readiness Estimator (heuristic)
  - Job-to-Profile Matching Engine
  - Learning Resource Recommender
  - Graph-Based Network Path Finder
- FastAPI-based API layer with validated endpoints for all features
- Explainable heuristic logic across all modules (no black-box models)
- Graph traversal–based networking logic using relationship paths
- Curated and synthetic datasets for skills, roles, learning resources, and networks
- Frontend web interface for all five tools
- Independent feature pages (no forced user workflow)
- Calm, stress-aware UI with multiple selectable color themes
- Shared navigation menu across all pages
- End-to-end local integration between frontend and backend
- Clear separation of concerns between UI, API, logic, and data layers

### Notes
- This release represents a complete local, working prototype.
- All features are usable independently.
- Outputs are designed to be explainable and interview-safe.
- No cloud deployment or persistence is included in this version.

---

## [Unreleased]

### Planned
- Optional prototype-level cloud deployment to demonstrate backend hosting concepts
- Environment-based configuration for local vs hosted execution
- Static data hosting using object storage (job descriptions, skill taxonomy, network graph)
- Graceful fallback to local cached datasets if hosted services are unavailable
- Frontend configuration to support hosted backend endpoints
- Flowcharts and system architecture diagrams based on final implementation
- UI polish, micro-interactions, and improved visual presentation

---

## Notes
- This changelog emphasizes real, implemented functionality.
- Future entries will reflect completed work only.
