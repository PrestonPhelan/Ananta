import React, { Component } from 'react';

import Sidebar from './sidebar/sidebar';

class TeamView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeam();
  }

  render() {
    if (this.props.team.name) {
      return (
        <div>
          <Sidebar />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default TeamView;
