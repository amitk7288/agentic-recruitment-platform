# R2 — Codex Project Instructions

## Project Overview

R2 ("Reed 2.0") is a production-style recruitment platform inspired by Reed.

An earlier version of the application was built using the MERN stack. That project can be used as a reference for:

- Existing features
- User journeys
- UI behaviour
- Data requirements
- Business logic

However, the MERN implementation must NOT be blindly copied.

R2 is a new implementation with a significantly more advanced architecture.

---

# Primary Purpose

R2 has two equally important purposes:

1. Build a sophisticated, production-style recruitment platform.
2. Give the developer genuine hands-on experience with technologies and engineering practices expected in high-level software engineering roles.

The long-term target is competence relevant to:

- Senior Software Engineer
- Lead Engineer
- Staff Engineer
- Principal Engineer
- Full-Stack Engineer
- Backend Engineer
- Cloud / Platform Engineer
- Distributed Systems Engineer
- AI / Agentic Engineer

Therefore, optimise for good engineering and learning rather than simply completing features as quickly as possible.

Do not introduce unnecessary complexity purely to make the architecture look impressive.

Every major architectural decision should solve a real problem or provide meaningful engineering experience.

---

# Current Technology Stack

## Monorepo

- Nx

Applications currently include:

- `apps/frontend` — Angular application
- `apps/api` — NestJS backend

Shared Nx libraries should be introduced where they provide meaningful boundaries or reusable functionality.

---

# Frontend

Primary technologies:

- Angular 20
- TypeScript
- Tailwind CSS
- Apollo Angular
- RxJS
- Angular Signals where appropriate

The frontend should follow modern Angular practices.

Prefer:

- standalone Angular architecture
- strongly typed code
- feature-oriented organisation
- reusable UI components
- clear separation between presentation and data access
- accessibility
- responsive design
- sensible state management

Do not introduce additional frontend libraries unless they provide a clear benefit.

---

# Backend

Primary technologies:

- NestJS
- TypeScript
- GraphQL
- Prisma
- PostgreSQL

GraphQL should primarily use NestJS's code-first approach.

NestJS decorators/types should generate the GraphQL schema.

Expected request flow:

Angular
→ Apollo Angular
→ GraphQL
→ NestJS Resolver
→ Application/Domain Service
→ Prisma
→ PostgreSQL

Resolvers should remain thin.

Business logic should not accumulate inside GraphQL resolvers.

Services should contain application/business behaviour.

Database concerns should remain appropriately separated from transport concerns.

---

# GraphQL

Use NestJS code-first GraphQL unless there is a strong reason not to.

Use appropriate:

- `@ObjectType()`
- `@InputType()`
- `@Field()`
- `@Query()`
- `@Mutation()`
- `@Args()`
- enums
- GraphQL scalars
- nullability
- list modifiers

GraphQL types should accurately communicate the API contract.

Do not make fields nullable merely to avoid dealing with TypeScript or database constraints.

Think carefully about the distinction between:

- GraphQL models
- GraphQL inputs
- domain/application models
- Prisma/database models

Do not unnecessarily couple all of these layers.

---

# Database

Primary database:

PostgreSQL

ORM:

Prisma

Future semantic/vector functionality:

pgvector

PostgreSQL will contain the application's primary relational data.

Database modelling should account for real recruitment concepts such as:

- users
- candidates
- employers
- jobs
- applications
- CVs
- qualifications
- experience
- saved jobs
- profiles

Exact models should evolve from actual feature requirements rather than being created speculatively.

Use migrations for schema changes.

Avoid database designs that simply reproduce MongoDB document structures from the old MERN project.

R2 uses a relational database and should take advantage of relational modelling.

---

# Existing MERN Application

The previous MERN implementation is a REFERENCE.

When recreating a feature:

1. Inspect what the MERN version does.
2. Determine the actual business requirement.
3. Identify the data involved.
4. Determine whether the existing behaviour still makes sense.
5. Design the R2 implementation using the new architecture.
6. Implement it using NestJS / GraphQL / PostgreSQL appropriately.

Do NOT mechanically translate:

Express route
→ GraphQL resolver

or:

Mongoose model
→ Prisma model

Architecture should be reconsidered where appropriate.

---

# Current Development Phase

The developer has completed a dedicated learning phase covering NestJS and GraphQL fundamentals.

NestJS topics studied include:

- modules
- controllers
- providers/services
- dependency injection
- DTOs
- middleware
- pipes
- validation
- guards
- RBAC concepts
- exception handling
- request lifecycle
- REST APIs
- CRUD operations
- testing

GraphQL topics studied include:

- GraphQL type system
- SDL
- objects and fields
- arguments
- Query
- Mutation
- Subscription
- scalars
- enums
- Non-Null
- Lists
- Interfaces
- Unions
- Input Objects
- Directives
- NestJS GraphQL integration
- NestJS code-first GraphQL

The current goal is to APPLY these concepts inside R2.

Do not assume the developer is an expert in every area simply because the topic has been studied.

---

# Learning Requirement

R2 is intentionally being used as a learning project.

This changes how assistance should be provided.

Do NOT automatically implement large systems without explanation.

When introducing an important concept, explain:

1. What we are building.
2. Why R2 needs it.
3. Where it belongs architecturally.
4. How the relevant technology works.
5. Then help implement it.

Prefer incremental implementation.

For example, rather than generating an entire authentication architecture at once:

1. Establish requirements.
2. Design the flow.
3. Create the necessary model.
4. Implement the service.
5. Implement the GraphQL layer.
6. Add authentication/authorization.
7. Test it.
8. Refactor where necessary.

The developer should understand the resulting system.

---

# Engineering Level

R2 should demonstrate engineering maturity beyond basic CRUD.

Where genuinely appropriate, consider:

- clear module boundaries
- separation of concerns
- dependency inversion
- API contracts
- validation
- authentication
- authorization
- RBAC
- caching
- asynchronous processing
- queues
- idempotency
- retries
- concurrency
- observability
- structured logging
- error handling
- resilience
- security
- scalability
- testing
- CI/CD
- infrastructure as code
- containerisation
- distributed systems trade-offs

However:

DO NOT add these simply because they sound senior.

Introduce them when the system creates a genuine reason to use them.

---

# Planned Architecture

The project is expected to progressively introduce:

## Containers

- Docker

## Container Orchestration

- Kubernetes

## Infrastructure as Code

- Terraform

## Cloud

AWS technologies are expected to include where appropriate:

- API Gateway
- Lambda
- RDS PostgreSQL
- SQS
- SNS
- Step Functions
- IAM
- Secrets Manager

Additional AWS services may be introduced where justified.

---

# Microservices

R2 will eventually provide practical exposure to microservices and distributed systems.

Do NOT prematurely split every feature into a microservice.

Initially favour sensible modular boundaries.

Potential service boundaries should emerge from actual domain and scaling requirements.

When microservices are introduced, the developer should learn why the boundary exists and the trade-offs involved.

Topics should eventually include:

- synchronous communication
- asynchronous messaging
- queues
- events
- eventual consistency
- retries
- idempotency
- failure handling
- distributed observability

---

# AI / Agentic Functionality

R2 will eventually add AI functionality on top of the recruitment platform.

Planned areas include:

- semantic job search
- CV ↔ job semantic matching
- embeddings
- pgvector
- RAG
- AI-assisted candidate/job analysis
- agentic recruitment workflows
- autonomous multi-step workflows
- human approval where appropriate

AI should solve actual recruitment problems.

Do not add superficial "AI features" purely for marketing.

The underlying recruitment platform should remain functional without AI.

---

# Testing

Testing is part of the architecture rather than an afterthought.

Use appropriate combinations of:

- unit tests
- integration tests
- GraphQL/API tests
- frontend component tests
- end-to-end tests

Existing Nx tooling should be preferred where suitable.

Important business behaviour should be tested rather than chasing arbitrary coverage percentages.

---

# Security

Security should be treated as a first-class concern.

Eventually account for:

- authentication
- authorization
- RBAC
- input validation
- secure token handling
- least-privilege access
- secrets management
- API security
- database security
- dependency security

Never commit credentials, secrets, tokens or environment secrets.

---

# Code Quality

Prefer:

- clear names
- small focused functions
- explicit types
- sensible abstractions
- separation of concerns
- maintainability
- readability

Avoid:

- `any` unless genuinely unavoidable
- giant services
- giant resolvers
- duplicated logic
- premature abstraction
- speculative architecture
- unnecessary design patterns
- unnecessary dependencies

Code should be understandable before it is clever.

---

# Working With Codex

When asked to implement something:

First inspect the existing repository.

Do not assume the folder structure or current implementation.

Before making significant architectural changes, explain what is being changed and why.

If several valid approaches exist, explain the important trade-off rather than arbitrarily choosing one.

When generating code, keep changes focused on the current task.

Do not refactor unrelated areas without a reason.

Do not install new dependencies without explaining why they are necessary.

Do not silently change architecture.

---

# Important Principle

The goal is NOT:

"Use as many technologies as possible."

The goal is:

"Build a realistic system that naturally creates opportunities to learn and demonstrate advanced software engineering."

R2 should gradually progress from:

Full-stack application

→ well-architected modular system

→ cloud-native application

→ distributed system

→ AI-enabled system

→ agentic recruitment platform

while ensuring the developer understands each stage.