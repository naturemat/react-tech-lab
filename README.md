# Group Task - Turborepo Monorepository

Monorepository with two React applications in TypeScript.

> Detailed documentation of folders, files, frontend libraries and installation: **[DOCUMENTACION.md](./DOCUMENTACION.md)**

## Structure

```
group_task/
├── apps/
│ ├── project1/ # User management (Chakra, MobX, RHF, Zod)
│ └── project2/ # Testing showcase (Jest, RTL, Cypress)
├── packages/
│ ├── ui/
│ └── typescript-config/
├── turbo.json
└── package.json
```

## Facility

From the monorepo root:

```bash
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts both projects in development |
| `npm run build` | Compile all packages |
| `npm run test` | Run Jest tests (project2) |
| `npm run test:e2e` | Run Cypress E2E (project2) |

### By project

**Project 1** (`apps/project1`):

```bash
npm run dev --workspace=project1
```

**Project 2** (`apps/project2`):

```bash
npm run dev --workspace=project2
npm run test --workspace=project2
npm run test:e2e --workspace=project2
```

## Ports

- Project 1: http://localhost:5173
- Project 2: http://localhost:5174