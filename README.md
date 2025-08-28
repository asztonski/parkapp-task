# ParkApp – Front‑End Task (React + Vite + Tailwind + GraphQL)



https://github.com/user-attachments/assets/ed775fd2-8368-4f87-b30b-1a7bb3c7ab52



A compact, production‑style demo that shows a clean login flow, protected routing, and the "Remote Pilot" screen coded from Figma.

## What’s done

* **Working routing** with `react-router-dom@7` (SPA).
* **Protected `/pilot` route** via `ProtectedRoute`; unauthenticated users are redirected to `/login` (with `state.from` preserved).
* **Login flow** integrated with **GraphQL** (`urql`) and typed hooks (Codegen). Error messages for invalid credentials & network issues.
* **Remote Pilot UI** implemented in **Tailwind v4** — **interactive & clickable** (dots, buttons, footer nav). UI only (no hardware logic), responsive and PWA‑friendly.
* **Code quality**: TypeScript, ESLint, Prettier.

> Note: **No automated tests** are included in this version.

## Quick start

> Commands use **PowerShell**; use any shell you prefer.

```powershell
# Install deps
npm i

# (Optional) Set GraphQL endpoint
# Create .env at repo root with:
# VITE_GRAPHQL_URL=https://dev.parkapp.pl/graphql

# Run dev server
npm run dev
node .\mocks\graphql\server.cjs

**Login:** use the test credentials from the task email. On success, the app sets an auth flag in storage and navigates to the previous route (defaults to `/pilot`).

**Build/preview:**

```powershell
npm run build
npm run preview
```

## How to use (short)

* Go to **/login**, sign in → you’ll be redirected to **/pilot**.
* On **/pilot**, the UI is fully clickable (main buttons, pagination dots, bottom nav). No backend/hardware actions are triggered — this is a UI showcase.
* Reloading **/pilot** while logged out redirects you back to **/login**.

## Libraries used

* **React 19 + TypeScript**, **Vite 7**
* **Tailwind CSS v4** (utility‑first styling)
* **react-router-dom v7** (routing)
* **urql v5** + **graphql** (GraphQL client)
* **GraphQL Code Generator** (typed hooks)
* **ESLint + Prettier** (linting/formatting)
* **vite-plugin-svgr** (SVGs as React components)

## Project structure (high level)

```text
src/
  auth/                 # setAuth / clearAuth / isAuthed helpers
  components/ui/        # Header, GoBackButton, NavFooter, etc.
  graphql/generated/    # Codegen outputs (typed urql hooks)
  layouts/              # AppLayout with <Outlet />
  pages/                # Login, Pilot (UI), NotFound
  router/               # ProtectedRoute, RootRouter
  main.tsx, index.css
```
