import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';

import TaskListItemContainer from './task_list_item_container';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
      tasks: []
    };

    this.createBlankTask = this.createBlankTask.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.moveTask = this.moveTask.bind(this);
  }

  componentDidMount() {
    if (this.props.tasks) {
      this.setState({
        tasks: Object.values(this.props.tasks)
        .sort( (a, b) => a.order - b.order )
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tasks) {
      this.setState({
        tasks: Object.values(newProps.tasks)
          .sort( (a, b) => a.order - b.order )
      });
    }
  }

  moveTask(dragIndex, hoverIndex) {
    const { tasks } = this.state;
    const dragTask = tasks[dragIndex];
    if (dragIndex) {
      this.setState(update(this.state, {
        tasks: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragTask],
          ],
        },
      }));
    }
    this.state.tasks.forEach( (task, idx) => {
      task.order = idx;
      this.props.updateTask(task);
    });
  }

  toggleFilter() {
    if (!this.state.filtered) {
      if (this.props.project.id === 'user') {
        this.props.fetchFilteredUserTasks(this.props.team.id);
      } else if (this.props.project.id === 'unassigned') {
        this.props.fetchFilteredUnassignedTasks(this.props.team.id);
      } else {
        this.props.fetchFilteredProject(this.props.project.id);
      }
    } else {
      switch (this.props.project.id) {
        case 'user':
          this.props.fetchUserTasks(this.props.team.id);
          break;
        case 'unassigned':
          this.props.fetchUnassignedTasks(this.props.team.id);
          break;
        default:
          this.props.fetchProject(this.props.project.id);
      }
    }
    this.setState({ filtered: !this.state.filtered });
  }

  createBlankTask(e) {
    e.preventDefault();
    console.log("Creating Blank Task");
    this.props.createTask({
      name: "",
      project_id: this.props.project.id,
      creator_id: this.props.currentUser.id,
      order: this.state.tasks.length})
      .then(
        task => {
          console.log(this.state);
          document.getElementById(task.id).focus();
        }
      );
  }

  // updateTasks() {
  //   this.setState(tasks)
  // }

  render() {
    let taskList = [];
    if (this.state.tasks.length > 0) {
      taskList = this.state.tasks
        .map( (task, i) =>
          <TaskListItemContainer
          task={task}
          key={task ? task.id : `moving-${i}`}
          index={i}
          createBlankTask={this.createBlankTask}
          moveTask={this.moveTask} /> );
    }

    let lastField;
    if (typeof this.props.project.id === "string") {
      lastField = (<div></div>);
    } else {
      lastField = (<ul id='new-task-dummy' className='list-item'>
        <div onClick={this.createBlankTask}>
          {"Enter a new task here"}
         </div>
      </ul>);
    }

    return (
      <div>
        <div id='completed-filter'>
          <div id='completed-filter-check'>{this.state.filtered ?
              <i
                id='incomplete-check'
                className="fa fa-check-circle-o"
                aria-hidden="true"
                onClick={this.toggleFilter}></i> :
              <i
                id='completed-check'
                className="fa fa-check-circle"
                aria-hidden="true"
                onClick={this.toggleFilter}></i>}</div>
          {"Show Completed"}
        </div>
        <ul>
          {taskList}
          {lastField}
        </ul>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(TaskList);
