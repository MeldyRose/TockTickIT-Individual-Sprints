# TokTickIT-Individual-Sprints

TokTickIT is an IT service desk application developed for CPE 334.  
Lab 1 establishes the full-stack project foundation using:

- `client/` — Frontend built with React, Typescript, Vite, and Bootstrap
- `server/` — Backend using Node.js, Express, Typescript, Prisma, and PostgreSQL
- `docs/lab-01/` — Documentation and records for Lab 1, including tests, AI usage, and peer review

## Prerequisites

- Node.js v24
- npm v11
- PostgreSQL v18 (running locally)
- Git 

## Setup

### 1.Clone the repository:

```bash
git clone <https://github.com/MeldyRose/TokTickIT-Individual-Sprints.git>
cd TokTickIT-Individual-Sprints
```

### 2.Install Dependencies

Install the frontend dependencies:

```bash
cd client
npm install
```

Install the backend dependencies:

```bash
cd ../server
npm install
```

### 3.Create the environment file from the provided template:

Create a `.env` file in the `server` directory based on `.env.example`.

```bash
cp .env.example .env
```

Set the PostgreSQL connection in `server/.env` using `DATABASE_URL`.

> Do not commit `.env`, database credentials, or other secrets.

### 4. Set Up the Database

Make sure PostgreSQL is running locally, then run the following commands from the `server` directory:

```bash
cd server
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

Database migrations and category seeding are implemented in the subsequent Lab 1 features.

## Running

Start the backend in one terminal:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the local URL provided by Vite in your browser(usually available at http://localhost:5173).

## Tests

Lab 1 uses Vitest for frontend tests and Supertest for backend API tests.

### Backend Tests

```bash
cd server
npm test
```

### Frontend Tests

```bash
cd client
npm test
```

## API

The backend uses REST-style APIs.

The following endpoints are required across the Lab 1 feature branches:

| Method | Endpoint | Purpose | Response |
|---|---|---|---|
| GET | `/api/health` | Check backend API status | {"status": "ok", "service": "TokTickIT API"}
| GET | `/api/categories` | Retrieve request categories | [{"id": _, "name": "____"},...]

## Structure

```text
TokTickIT-Individual-Sprints/
├── client/
├── server/
│   ├── prisma/
│   ├── src/
│   └── tests/
├── docs/
│   └── lab-01/
│       ├── ai_use.md
│       └── reviewer.md
├── .gitignore
└── README.md
```