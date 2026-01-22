# Cloud Architecture

This document describes the cloud architecture for the Career Intelligence Platform at a prototype level. The goal of cloud integration is to demonstrate understanding of deployment, configuration, and resilience concepts rather than to build a production-scale system.

Cloud usage is intentionally minimal, modular, and cost-aware.

---

## Objectives of Cloud Integration

The cloud architecture is designed to:

- Demonstrate practical cloud deployment concepts
- Separate compute, storage, and configuration concerns
- Support environment-based configuration (local vs cloud)
- Enable limited fallback and resilience behavior
- Remain ethically and legally compliant for a prototype

The platform does not claim production-grade scalability or high availability.

---

## High-Level Cloud Architecture Overview

The system follows a simple and clear cloud model:

- **Frontend:** Static assets served locally or via simple hosting
- **Backend API:** Deployed as a stateless service
- **Data Storage:** Object storage for curated static datasets
- **Configuration:** Environment variables for runtime control

All components are loosely coupled to allow easy local development and cloud deployment.

---

## Backend Deployment

**Component:** Backend API (FastAPI)

**Cloud Role:**
- Hosts the main application logic and intelligence modules
- Exposes REST endpoints consumed by the frontend

**Deployment Characteristics:**
- Stateless service
- Environment-driven configuration
- Replaceable deployment target

**Possible Platforms:**
- AWS EC2 or Elastic Beanstalk
- Azure App Service
- Google Cloud Run
- Lightweight PaaS alternatives (e.g., Render, Railway)

The exact provider is interchangeable; the architectural intent remains the same.

---

## Data Storage Strategy

**Component:** Static and curated datasets

**Cloud Role:**
- Store job descriptions
- Store skill taxonomy
- Store learning resource metadata
- Store synthetic network graph data

**Storage Type:**
- Cloud object storage (e.g., S3, Blob Storage)

**Design Rationale:**
- Separates compute from data
- Reduces backend complexity
- Enables easy caching and fallback
- Avoids storing sensitive user data

No user-uploaded resumes are permanently stored in cloud storage.

---

## Configuration and Environment Management

The system supports multiple execution environments:

- Local development
- Cloud-deployed prototype

**Configuration Strategy:**
- Environment variables for:
  - data source paths
  - cloud vs local mode
  - feature toggles
- No hard-coded credentials
- Clear separation of secrets and code

This demonstrates secure and maintainable configuration practices.

---

## Cloud-Native Design Principles Applied

- **Stateless Backend:** Enables redeployment without data loss
- **Loose Coupling:** Cloud services can be replaced without redesign
- **Minimal Surface Area:** Only essential services are used
- **Cost Awareness:** No always-on or high-cost components

---

## Relationship to Fallback Strategy

The cloud architecture directly supports resilience through:

- Cached datasets stored locally
- Ability to switch to limited analysis mode
- Graceful degradation of non-essential features

Fallback behavior is described in detail in the resilience strategy document.

---

## Out of Scope for Cloud Architecture

The following are intentionally excluded:

- Multi-region deployments
- Auto-scaling groups
- Load balancers
- Managed databases for user data
- Real-time data pipelines

These exclusions align with the prototype scope and learning goals.

---

## Closing Note

This cloud architecture balances realism and restraint. It demonstrates practical understanding of cloud concepts while respecting the limits of a prototype system. The design is intended to be explainable, adaptable, and suitable for incremental extension in future iterations.
