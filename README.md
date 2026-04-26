# PrimeHacks

PrimeHacks is a production-style hackathon platform frontend built with Next.js App Router. It is designed to help teams discover hackathons, submit projects, apply as organizers, manage events, upgrade to premium plans, and administer platform users from a polished dashboard experience.

This repository currently contains the client application. It depends on a separate backend API for authentication, hackathon data, submissions, payments, organizer applications, and admin operations.

## Highlights

- Production-oriented Next.js 16 frontend with App Router and TypeScript
- Role-aware experience for users, organizers, and admins
- Email/password authentication with email OTP verification
- Google social sign-in through `better-auth`
- Public hackathon discovery flow with detailed event pages
- Project submission workflow for authenticated participants
- Organizer application flow with review status tracking
- Organizer hackathon creation, editing, listing, and deletion
- Premium subscription checkout flow with payment verification
- Admin user management with role and status updates
- TanStack Query SSR hydration for smoother data loading
- Tailwind CSS 4 + DaisyUI based UI system with dark/light theme toggle

## Current Product Scope

| Area | Status | Notes |
| --- | --- | --- |
| Landing page and branded marketing UI | Ready | Home page, navbar, footer, themed sections, testimonials-style content |
| Authentication | Ready | Login, registration, Google sign-in, OTP email verification |
| GitHub social login | Partial | Button exists in UI, but action is currently disabled |
| Hackathon discovery | Ready | Listing page, hero section, cards, details page, sidebar metadata |
| Hackathon details access | Ready with constraint | `/hackathons/details/[id]` is currently protected and requires authentication |
| Project submissions | Ready | Submission modal/form and "My Submissions" dashboard page |
| Organizer application | Ready | Apply flow plus dashboard status/history view |
| Organizer event management | Partial | Create, edit, list, and delete are present; some organizer dashboard pages are placeholders |
| Premium subscription | Ready | Checkout session creation and success-page verification flow |
| Admin dashboard | Partial | User management is implemented; other admin analytics routes are scaffolded in navigation only |
| Profile and account UI | Partial | Profile page is functional; change password screen is UI-only right now |
| Blog/resources/secondary pages | Partial | Some nav/footer destinations are placeholders or not implemented yet |
| Automated testing | Not set up yet | No unit/integration test suite is configured in this repo |

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.1.7 |
| UI | React 19, Tailwind CSS 4, DaisyUI, Lucide React, Framer Motion |
| Language | TypeScript |
| State/Data | TanStack Query, TanStack Form |
| HTTP | Axios |
| Auth client | `better-auth/react` |
| Validation | Zod |
| 3D/visual extras | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Package/runtime | pnpm workspace, Bun used by current `dev` script |

## Architecture Overview

### Frontend

- App Router based route groups split into public/common pages and dashboard pages
- Server-side prefetching with `QueryClient`, `dehydrate`, and `HydrationBoundary`
- Client-side mutations and cache invalidation handled with TanStack Query
- Form state handled with TanStack Form plus Zod/manual validation

### API Integration

- Client requests are sent to relative paths under `/api/v1`
- Auth requests are sent to `/api/auth`
- `next.config.ts` rewrites both route groups to the configured backend origin
- Server-side data fetching uses the backend origin directly through `getServerApiBaseUrl()`

### Auth and Route Protection

- Session-related cookies are checked in [`src/proxy.ts`](src/proxy.ts)
- Protected route groups currently include `/dashboard`, `/profile`, `/premium`, `/change-password`, and `/hackathons/details/[id]`
- Registration stores pending verification state and redirects users to `/verify-email`

### Main Service Domains

- `auth`
- `hackathons`
- `submission`
- `payments`
- `organizerApplication`
- `admins/users`

## Route Map

### Public and shared pages

- `/`
- `/hackathons`
- `/login`
- `/register`
- `/verify-email`
- `/become-organizer`
- `/blog`

### Protected user pages

- `/hackathons/details/[id]`
- `/profile`
- `/premium`
- `/change-password`
- `/dashboard`
- `/dashboard/my-submissions`
- `/dashboard/organizer-application`

### Protected organizer pages

- `/dashboard/organizer`
- `/dashboard/organizer/hackathons/create`
- `/dashboard/organizer/hackathons/my-hackathons`
- `/dashboard/organizer/hackathons/[id]/edit`
- `/dashboard/organizer/manage-rewards`

### Protected admin pages

- `/dashboard/admin/all-users`

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+ or newer
- Bun 1+ if you want to use the current `pnpm dev` script unchanged
- A running backend API compatible with the service layer used in this repo

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and update the values for your environment.

```bash
cp .env.example .env
```

If you are on Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Start the development server

```bash
pnpm dev
```

Important: the current `dev` script runs `bunx next dev`, so Bun must be installed. If you want a Node-only workflow, update the script to `next dev` first.

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000).

## Environment Variables

The backend origin is resolved in this order:

1. `NEXT_PUBLIC_API_BACKEND_URL`
2. `NEXT_PUBLIC_API_BASE_URL`
3. `NEXT_PUBLIC_API_BASE_URL_AUTH`

For the least surprise, keep all three backend-related variables set as shown in `.env.example`.

| Variable | Required | Purpose | Example |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_API_BACKEND_URL` | Recommended | Base backend origin used by rewrites and server-side fetches | `http://localhost:5000` |
| `NEXT_PUBLIC_API_BASE_URL` | Recommended | Explicit API v1 base URL used as a compatibility fallback | `http://localhost:5000/api/v1` |
| `NEXT_PUBLIC_API_BASE_URL_AUTH` | Recommended | Explicit auth API base URL used as a compatibility fallback | `http://localhost:5000/api/auth` |
| `NEXT_PUBLIC_APP_URL` | Recommended | Frontend origin used by `better-auth` callback resolution | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_URL` | Optional | Alternate fallback for frontend origin | `http://localhost:3000` |
| `NEXT_DIST_DIR` | Optional | Custom Next.js build directory | `.next` |

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the local development server through Bun |
| `pnpm build` | Builds the production bundle |
| `pnpm start` | Starts the production server |
| `pnpm lint` | Runs ESLint |

## Project Structure

```text
.
|- docs/
|- public/
|- src/
|  |- app/                     # App Router pages and route groups
|  |- components/              # Shared UI and page-level components
|  |- hooks/                   # Query hooks and session helpers
|  |- lib/                     # Axios client, config, auth helpers, utilities
|  |- modules/                 # Domain modules (organizer application, etc.)
|  |- providers/               # Query provider and app-level providers
|  |- services/                # API service layer
|  |- types/                   # Shared TypeScript domain types
|  |- validations/             # Submission validation helpers
|  |- Zod/                     # Auth/submission schemas
|  |- proxy.ts                 # Route protection and redirect logic
|- next.config.ts              # Rewrites and Next.js config
|- package.json
```

## Key Functional Flows

### Authentication flow

1. User registers with email and password
2. Tokens are stored in cookies
3. Pending verification cookie is set
4. User is redirected to `/verify-email`
5. After OTP verification, the user logs in and gains access to protected routes

### Hackathon participation flow

1. User signs in
2. User explores the hackathon catalog
3. User opens `/hackathons/details/[id]`
4. User submits project details through the submission form
5. User tracks submissions in `/dashboard/my-submissions`

### Organizer flow

1. User applies through `/become-organizer`
2. Admin reviews the organizer application
3. Approved organizer manages hackathons from the dashboard
4. Organizer creates, edits, and deletes owned hackathons

### Premium upgrade flow

1. User opens `/premium`
2. Client requests a checkout session from the backend
3. User is redirected to the payment provider
4. Payment success page verifies the returned session
5. User profile/dashboard can then reflect premium access

## Deployment Notes

- This app is well suited for Vercel deployment, but it can run on any host that supports Next.js
- The backend must be deployed separately and exposed through the configured environment variables
- Rewrites in `next.config.ts` assume the backend serves:
  - `/api/v1/*`
  - `/api/auth/*`
- If you use remote images outside the current allowlist, update `images.remotePatterns`

## Known Gaps and Suggested Next Steps

- Connect the disabled GitHub social login flow
- Replace placeholder pages such as root dashboard screens, blog page, and organizer rewards screen
- Add missing routes referenced in navigation and footer sections
- Wire the change-password UI to a real backend endpoint
- Add automated tests for auth, hackathon flows, and dashboard mutations
- Add a proper `.env.production` strategy and deployment checklist
- Add monitoring, analytics, and error tracking before production launch

## Backend Expectations

This frontend assumes a backend that supports:

- Cookie-based authentication
- Email OTP verification
- Google social auth
- CRUD operations for hackathons
- Project submission endpoints
- Organizer application endpoints
- Payment checkout and session verification
- Admin user role/status management

If you publish this repository on GitHub, it is a good idea to link the backend repository here once it is available.

## Contributing

If you are continuing development on this project:

1. Keep service contracts in sync with the backend
2. Document new environment variables in `.env.example`
3. Update this README when routes or flows change
4. Add tests for every critical user-facing flow you finish

## License

No license file is included yet. Add a license before publishing publicly if you want others to reuse the code.
