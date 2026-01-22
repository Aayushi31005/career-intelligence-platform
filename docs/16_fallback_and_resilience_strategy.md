# Fallback and Resilience Strategy

This document describes how the Career Intelligence Platform is designed to remain useful under partial system limitations. Rather than aiming for high availability or fault tolerance, the focus is on **graceful degradation**, **user trust**, and **continuity of core insights**.

Resilience in this system is treated as both a technical and experiential concern.

---

## Philosophy of Resilience

The platform follows a calm and transparent approach to resilience:

- Failures are anticipated, not ignored
- Core functionality is prioritized over completeness
- Users are informed clearly without alarmist messaging
- The system degrades gracefully instead of breaking abruptly

The goal is not to hide limitations, but to manage them responsibly.

---

## Types of Failures Considered

The prototype accounts for the following realistic limitations:

- Cloud backend temporarily unavailable
- Cloud object storage inaccessible
- Network instability
- Partial service degradation
- Feature-level unavailability

These scenarios are treated as expected conditions, not exceptional ones.

---

## Fallback Strategy Overview

When a limitation is detected, the system transitions into a **limited analysis mode** rather than a failure state.

Key principles:
- Core insights remain available whenever possible
- Non-essential features are temporarily disabled
- Cached or local datasets are used as backups
- The user experience remains calm and informative

---

## Backend-Level Fallback

### Primary Mode
- Backend API runs in cloud environment
- Static datasets loaded from cloud object storage

### Fallback Mode
- Backend switches to cached or local datasets
- Advanced or optional modules may be paused
- Core intelligence modules continue operating

This transition is controlled through environment configuration and runtime checks.

---

## Data-Level Fallback

### Strategy
- Maintain local copies of curated datasets
- Use cached versions when cloud data sources are unavailable
- Avoid blocking analysis due to data source unavailability

### Supported in Fallback Mode
- Skill gap analysis
- Resume alignment estimation
- Role proximity evaluation

### Limited or Disabled in Fallback Mode
- Network path exploration (if graph data unavailable)
- Expanded learning recommendations (if resource data unavailable)

---

## Feature Prioritization During Degradation

Features are categorized by criticality:

### High Priority (Always Attempt to Support)
- Skill gap analysis
- Resume readiness indicators
- Role fit categorization

### Medium Priority
- Learning resource recommendations

### Lower Priority
- Network path visualization
- Advanced visualizations

This ensures the platform continues to deliver meaningful value.

---

## Frontend and UX Behavior

The frontend plays a key role in resilience.

### UX Principles During Fallback
- No abrupt error screens
- No technical jargon exposed to users
- Calm and reassuring status messaging

### Example Messaging
> “Some advanced insights are temporarily unavailable. Core analysis remains accessible using cached data.”

The interface clearly communicates limitations without creating anxiety.

---

## Logging and Awareness

At the prototype level:
- Basic logging is used to detect and record fallback events
- Logs are primarily intended for development and debugging
- No automated alerts or monitoring systems are configured

This aligns with the learning-focused scope of the project.

---

## What This Strategy Does Not Claim

The fallback and resilience strategy does not claim:
- zero downtime
- fault-tolerant distributed systems
- automatic recovery or self-healing
- production-grade reliability guarantees

It is intentionally scoped to demonstrate awareness and responsibility.

---

## Alignment with Design Principles

This strategy directly supports:
- calm over urgency
- transparency over obscurity
- guidance over judgment
- trust through honest communication

Resilience is treated as part of the user experience, not just an infrastructure concern.

---

## Closing Note

This fallback and resilience strategy ensures that the Career Intelligence Platform remains dependable, understandable, and respectful of user trust—even under partial system limitations. It reflects a realistic and ethically grounded approach to system design at the prototype level.
