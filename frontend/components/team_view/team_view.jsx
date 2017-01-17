import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Sidebar from './sidebar/sidebar';
import EmptyTeamContainer from './empty_team_container';
import ProjectViewContainer from './project_view/project_view_container';

class TeamView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeam()
      .then( team => {
        const memberIds = team.members.map( member => member.id );
        if (!memberIds.includes(this.props.currentUser.id)) {
          hashHistory.push('/app/teams');
        }
        if (Object.values(team.projects).length > 0) {
          this.props.fetchProject(Object.values(team.projects)[0].id);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.teamId !== nextProps.params.teamId) {
      nextProps.fetchTeam();
    }
  }

  render() {
    let mainComponent;
    if (this.props.team.name) {
      if (Object.keys(this.props.team.projects).length > 0) {
        mainComponent = <div className='col-4-5'><ProjectViewContainer /></div>;
        } else {
          mainComponent = <div className='col-4-5'><EmptyTeamContainer /></div>;
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
