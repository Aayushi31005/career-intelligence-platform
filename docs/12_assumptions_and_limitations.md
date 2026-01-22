# Assumptions and Limitations

This document outlines the key assumptions made during the design and implementation of the Career Intelligence Platform, as well as the known limitations of the current prototype.

Explicitly documenting these constraints ensures transparency, ethical integrity, and realistic expectations for both users and reviewers.

---

## Assumptions

The design and behavior of the platform are based on the following assumptions:

### 1. Job Descriptions as Market Signals
- Job descriptions are assumed to be a reasonable proxy for current market demand.
- Skill frequency across curated job postings is treated as an indicator of importance.
- Variations across companies and regions are acknowledged but not exhaustively modeled.

---

### 2. Skill Taxonomy Coverage
- A predefined skill taxonomy is assumed to cover the majority of commonly required skills for selected roles.
- Skill synonyms and naming variations are normalized to the best extent possible within a curated dataset.

---

### 3. Resume Content Accuracy
- The platform assumes that resume content accurately reflects the user’s skills and experience.
- No verification of claims is performed.
- Analysis is based solely on textual content provided by the user.

---

### 4. Heuristic-Based Evaluation
- Resume alignment and role readiness are evaluated using heuristic methods rather than predictive or proprietary algorithms.
- Scores and indicators are intended for guidance, not decision-making automation.

---

### 5. Synthetic and Curated Data
- Professional networks, job market data, and learning resources are curated or synthetic.
- These datasets are representative but not exhaustive or real-time.

---

## Limitations

The following limitations are acknowledged as part of the prototype-level implementation:

### 1. No Real-Time Market Data
- The platform does not scrape or continuously update job postings.
- Insights may lag behind real-world market changes.

---

### 2. No Proprietary ATS Modeling
- The ATS readiness estimator does not replicate or reverse-engineer any specific Applicant Tracking System.
- Results should not be interpreted as guarantees of shortlisting or rejection.

---

### 3. Limited Personalization
- User personalization is constrained to curated themes and preferences.
- The system does not learn from individual user behavior or outcomes.

---

### 4. Prototype-Level Scalability
- The system is not optimized for high concurrency or large-scale usage.
- Cloud deployment is included for demonstration purposes only.

---

### 5. Simplified Networking Model
- Professional relationships are modeled using a synthetic graph.
- Real-world networking dynamics, social context, and human judgment are not fully captured.

---

### 6. Offline and Fallback Constraints
- Offline or backup analysis relies on cached datasets.
- Advanced features may be unavailable during constrained states.

---

## Ethical Boundaries

The platform intentionally avoids:
- collecting or storing sensitive personal data,
- automating hiring or outreach actions,
- making predictive or deterministic claims about career outcomes.

These boundaries are design choices, not technical shortcomings.

---

## Closing Note

These assumptions and limitations are documented to ensure that the platform remains transparent, defensible, and ethically grounded. Future iterations may reduce some limitations, but the core commitment to explainability and user trust will remain unchanged.
