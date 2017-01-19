import React, { Component } from 'react';

import { getDateString } from '../../../util/date_util';

class TaskDetailHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div>{getDateString(this.props.task.due)}</div>
      </div>
    );

  }
}

export default TaskDetailHeader;
