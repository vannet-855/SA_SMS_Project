# TODO - Admin Dashboard UI + Data Fix

## Backend (hardcoded endpoints + routing)
- [ ] Update `backend/routes/dashboard.routes.js` to return hardcoded stats (JWT protected).
- [ ] Update `backend/routes/student.routes.js` to return hardcoded recent students array (JWT protected).
- [ ] Update `backend/routes/attendance.routes.js` to return hardcoded today attendance array (JWT protected).
- [ ] Update `backend/routes/exam.routes.js` to return hardcoded upcoming exams array (JWT protected).
- [x] Update `backend/server.js` to mount the above routes under `/api/dashboard`, `/api/students`, `/api/attendance`, `/api/exams`.


## Frontend (pixel-perfect UI + API field matching)
- [ ] Update `frontend/src/app/dashboard/dashboard.service.ts` interfaces + parsing to match the hardcoded payload shapes.
- [ ] Update `frontend/src/app/dashboard/dashboard.component.ts` mapping helpers and models.
- [ ] Rebuild `frontend/src/app/dashboard/dashboard.component.html` to match the Figma spec (layout + table + pills + actions).
- [ ] Rebuild `frontend/src/app/dashboard/dashboard.component.scss` to use the exact CSS variables and dark theme spec.
- [ ] Update `frontend/src/app/dashboard/sidebar.component.ts/html/scss` to match the sidebar spec (220px, active/hover, badges, bottom admin block, logout button).
- [ ] Update `frontend/src/app/dashboard/topbar.component.ts/html/scss` to match the topbar spec (64px height, search + bell badge + quick add).

## Validation
- [x] Start backend and verify endpoints return correct JSON.

- [ ] Start frontend and verify dashboard loads with non-zero stats.
- [ ] Visual check: status pills, bar colors thresholds, spacing/radii/borders.

