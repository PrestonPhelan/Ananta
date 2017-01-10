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
  - SplashLogo
  - SplashButtons
 - SplashContent
  - SplashGif
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
**TeamPageContainer**
- ProjectSidebarContainer
- ProjectView

**ProjectView**
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
 | "/users/:id" | "UserViewContainer" |
 | "/users/:id/tasks" | "TaskListContainer" |
 | "/users/:id/edit"  | "EditUserFormContainer" |
 | "/users/:id/teams" | "TeamListContainer" |
 | "/teams/:id" | "TeamPageContainer" |
 | "/teams/new" | "TeamFormContainer" |
 | "/teams/:team_id/projects/new" | "ProjectFormContainer" |
 | "/projects/:id" | "ProjectView" |
 | "/tasks/:id" | "TaskDetailContainer" |
