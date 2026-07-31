# Reed 2.0 🚀

An AI-powered recruitment platform that connects employers and candidates through intelligent search, semantic matching, and autonomous AI workflows.

Built as a modern recruitment ecosystem inspired by platforms like Reed, enhanced with AI agents that automate candidate discovery, job matching, and recruitment workflows.

![Reed 2.0 Screenshot](./screenshots/home.png)

---

## ✨ Overview

Reed 2.0 is a next-generation recruitment platform designed to improve how candidates discover opportunities and how employers find talent.

Unlike traditional job boards that rely on keyword matching, Reed 2.0 uses AI-powered semantic search and intelligent workflows to understand:

- Candidate skills and experience
- Job requirements and context
- Career goals and preferences
- Employer hiring needs

The platform combines modern frontend architecture with AI-driven automation to create a smarter recruitment experience.

---

## 🚀 Key Features

### 🤖 AI Candidate Matching

Uses intelligent matching algorithms to connect candidates with relevant roles based on:

- Skills
- Experience
- Technologies
- Career preferences
- Job descriptions

---

### 🔎 Semantic Job Search

Search beyond keywords.

Instead of requiring exact matches, AI understands the meaning behind searches.

Example:

> "Frontend developer experienced with modern JavaScript frameworks"

Can match candidates with:

- Angular
- React
- TypeScript
- JavaScript
- UI engineering experience

---

### 🧠 AI Recruitment Agents

Autonomous AI workflows designed to assist recruiters by:

- Finding suitable candidates
- Ranking applicants
- Summarising CVs
- Highlighting skill matches
- Reducing manual screening time

---

### 👤 Candidate Profiles

Candidates can:

- Create professional profiles
- Upload CVs
- Showcase technical skills
- Track applications
- Receive AI-powered job recommendations

---

### 🏢 Employer Dashboard

Recruiters can:

- Create job listings
- Manage applicants
- Review AI-ranked candidates
- Streamline hiring workflows

---

# 🛠 Tech Stack

## Frontend

- Angular 20
- TypeScript
- Nx Monorepo
- Tailwind CSS
- RxJS
- Angular Signals

## Backend

- NestJS
- Node.js
- REST APIs
- MongoDB

## AI

- Semantic search
- AI agents
- LLM integrations
- Intelligent matching workflows

## Testing

- Vitest
- Playwright

## DevOps

- GitHub Actions
- CI/CD pipelines

---

# 🏗 Architecture

The project uses an Nx monorepo architecture:

apps/
└── frontend

libs/
├── ui
├── auth
├── jobs
├── profiles
├── data-access
└── models


This provides:

- Shared libraries
- Scalable architecture
- Clear domain separation
- Maintainable enterprise structure

---

# 📸 Screenshots

## Job Search

![Job Search](./screenshots/search.png)

## Candidate Profile

![Profile](./screenshots/profile.png)

## Employer Dashboard

![Dashboard](./screenshots/dashboard.png)

---

# 🧪 Running Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ng-reed-clone.git

Install dependencies:

npm install

Start the application:

npx nx serve frontend
🎯 Project Goals

Reed 2.0 aims to demonstrate how AI can transform recruitment platforms by:

✅ Reducing manual candidate screening
✅ Improving job discovery
✅ Creating better candidate-employer matches
✅ Automating repetitive recruitment workflows

👨‍💻 Author

Built by Amit K

Full Stack Developer specialising in React, Next.js, Angular, TypeScript, modern frontend architecture and AI-powered applications.
