# React Tech Lab

A research laboratory for exploring and comparing modern React technologies. This project is developed as part of a group investigation for a web programming course.

## Purpose

This repository serves as a hands-on study of different React ecosystems. Each technology stack is implemented in an isolated branch, allowing direct comparison without dependency conflicts.

## Technologies Covered

| Category | Technologies |
|----------|--------------|
| **UI Frameworks** | Tailwind CSS, Material UI, Chakra UI |
| **State Management** | Zustand, Redux Toolkit, MobX, Context API, TanStack Query |
| **Routing** | React Router, TanStack Router |
| **Forms & Validation** | React Hook Form, Formik, Zod |
| **React 19 Hooks** | useState, useReducer, useContext, useRef, useEffect, useMemo, useCallback, useTransition, useOptimistic, useActionState, use, and more |
| **Testing** | Jest, React Testing Library, Cypress |

## Project Branches

Each branch contains a complete, runnable project that demonstrates a specific technology combination.

| Branch | Project Name | Tech Stack |
|--------|--------------|------------|
| `p1-counter-navigator` | Counter Navigator | Tailwind CSS + Zustand + React Router |
| `p2-registration-dashboard` | Registration Dashboard | Material UI + Redux Toolkit + Formik |
| `p3-smart-todo-list` | Smart Todo List | Chakra UI + MobX + React Hook Form + Zod |
| `p4-api-explorer` | API Explorer | TanStack Router + TanStack Query + Context API |
| `p5-hook-playground` | Hook Playground | All React 19 Hooks |
| `p6-test-suite` | Test Suite | Jest + React Testing Library + Cypress |

## How to Use This Repository

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-tech-lab.git
cd react-tech-lab
git checkout p1-counter-navigator
npm install
npm run dev
```