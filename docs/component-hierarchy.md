# Component Hierarchy

## Authentication & Other Modal Forms

**AuthFormContainer**
 - AuthForm
 - UserCreateForm

**TeamFormContainer**
 - TeamForm

**ProjectFormContainer**
 - ProjectForm

**EditUserFormContainer**
 - EditUserForm


## Splash

**Splash**
 - SplashHeader
 - SplashContent
  - SplashForm

## Layout

**Header**
 - TeamDropdownContainer
  - TeamDropdown
    - TeamDropdownItem
 - UserDropdownContainer
   - UserDropdown
    - UserDropdownItem

  - (TeamDropdownContainer needs to pass teams from State, with names)
  - (UserDropdownContainer needs to pass user id from state.)


## Team Select Page

**TeamSelect**
  - TeamListContainer
   - TeamList
    - TeamListItem
    - CreateTeamItem

  - (Need Team list from State, with names, members pics)


## Project View Page
**ProjectView**
 - ProjectSidebarContainer
 - TaskListContainer

**ProjectSidebarContainer**
  - TeamSummaryContainer
  - ProjectListContainer

**TeamSummaryContainer**
  - TeamSummary
    - TeamName
    - MemberList
      - MemberListItem

  - (Need Members with pics)

**ProjectListContainer**
 - SpecialTaskGroupList
  - SpecialTaskGroupList
 - ProjectList
  - ProjectListItem

 - (Need Projects with names from store)


**TaskListContainer**
  - TaskList
    - TaskListItem

  - (Need Tasks with name, complete, worker pic, due date)

**TaskDetailContainer**
  - TaskDetail
    - TaskHeader
    - TaskForm

  - (Need Task name, due date, time estimate, project/header)


## View User Modal
**UserViewContainer**
  - MemberList
  - UserView
    - UserDetail
    - TeamList
      - TeamListItem
    - WorkloadDetail

  - (Need Team with member pictures, User with details, team list, workload information)

 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/"  | "Splash" |
 | "/sign-up"| "UserCreateForm" |
 | "/log-in" | "AuthFormContainer" |
 | "/users/:user_id/teams/:id" | "ProjectView" |
 | "/users/:id/tasks" | "ProjectView" |
 | "/users/:id/edit"  | "EditUserFormContainer" |
 | "/users/:id/teams" | "TeamListContainer" |
 | "/teams/:team_id/users/:id" | "UserViewContainer" |
 | "/teams/new" | "TeamFormContainer" |
 | "/teams/:team_id/projects/new" | "ProjectFormContainer" |
 | "/teams/:team_id/projects/:id" | "Project View" |
 | "/teams/:team_id/projects/:project_id/tasks/:id" | "TaskDetailContainer" |
