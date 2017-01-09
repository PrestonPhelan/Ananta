# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users/:id`
- `GET /api/users/:user_id/teams`
- `GET /api/users/:user_id/tasks`
- `GET /api/users/:user_id/teams/:team_id/tasks`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Organizations
- `GET /api/organizations/:organization_id/users`

### Teams
- `POST /api/teams`
- `PATCH /api/teams/:id`
- `GET /api/teams/:team_id/users`
- `GET /api/teams/:team_id/projects`
- `GET /api/teams/:team_id/tasks`
  -For unassigned tasks

### Projects
- `POST /api/projects`
- `PATCH /api/projects/:id`
- `GET /api/projects/:project_id/tasks`

### Tasks
- `POST /api/tasks/`
- `PATCH /api/tasks/:id`

### Memberships
- `POST /api/memberships`
