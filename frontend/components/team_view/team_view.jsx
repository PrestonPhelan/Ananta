import React, { Component } from 'react';

import Sidebar from './sidebar/sidebar';
import EmptyTeamSplash from './empty_team_splash';

class TeamView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeam();
  }

  render() {
    let mainComponent;
    if (this.props.team.name) {
      if (Object.keys(this.props.team.projects).length > 0) {
        mainComponent = <div className='col-4-5'>{"Task List Will Show Here"}</div>;
        } else {
          mainComponent = <EmptyTeamSplash />;
        }
      return (
        <div className='team-view'>
          <Sidebar />
          {mainComponent}
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
