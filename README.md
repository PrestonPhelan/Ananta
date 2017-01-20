![ananta-logo]
[ananta-logo]: http://i.imgur.com/TVHhphE.png

[Ananta](https://www.ananta-app.com) is a project management and task tracking web application, built
on a Postgres/Rails/React stack. It allows users to organize into teams, create projects, and manage tasks.  

Ananta is a personal project of Preston Phelan, inspired by Asana.

## Features

### MVP Features
- Secure front-end authentication and user creation
- User profiles
- Teams of users, easy creation and adding of new members
- Team projects with task lists
- Tasks with easy editing that can be assigned to team members
- User's view of tasks assigned to them
- Search for tasks that haven't been assigned
- Complete tasks, filter completed tasks out of view.

### Screens

#### View and select from your existing teams.

![team-select]
[team-select]: ./docs/team_select.png


#### Create a new team in one easy step.

![member-add]
[member-add]: ./docs/member_add.png


#### View the team's projects, and their tasks.

![project-view]
[project-view]: ./docs/project_view.png


#### Get to know all of your teammates.

![teammate-view]
[teammate-view]: ./docs/teammate_view.png


#### Assign team members to particular tasks.

![member-assign]
[member-assign]: ./docs/member_assign.png


#### Get a detailed view of a task.

![task-detail]
[task-detail]: ./docs/task_detail.png



## Development History

### MVP Development
Ananta's first build was completed in two weeks.  Production design began on January 7, 2017, and MVP Features were completed on January 20.

## Implementation

Ananta is an interface that allows users to interact with a Postgres database of users, teams, projects, and tasks.  Teams & Users have a many-to-many relationship.  Projects belong to teams, and tasks belong to projects.

The React state stores the active team, project, and task (if any).

### Tasks

Tasks are dynamic and easily edited and created in view.  Each task item is actually an input element, that can be modified without the need for an additional form:
```js
  class TaskListItem extends Component {
    constructor(props) {
      super(props);
      this.state = { name: this.props.task.name };
    }

    //Some code redacted

    activateTask() {
      this.props.fetchTask();
    }

    updateName(e) {
      this.setState( { name: e.target.value } );
    }

    submitUpdate(e) {
      const updatedTask = { id: this.props.task.id, name: this.state.name };
      this.props.updateTask(updatedTask);
    }

    //Some code redacted

    //In render
    <li id='task-name' className='task-detail'>
      <AutosizeInput
        className='task-name-input'
        type="text"
        value={this.state.name}
        onChange={this.updateName}
        onBlur={this.submitUpdate}
        onClick={this.activateTask}
          />
    </li>
  }
```

## Future Development

Full list of implementation backlog can be found [here](./docs/future_features.md).
