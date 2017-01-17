import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Sidebar from './sidebar/sidebar';
import EmptyTeamContainer from './empty_team_container';

class TeamView extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTeam: "" };
  }

  componentDidMount() {
    this.props.fetchTeam()
      .then( team => {
        const memberIds = team.members.map( member => member.id );
        if (!memberIds.includes(this.props.currentUser.id)) {
          hashHistory.push('/app/teams');
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
        mainComponent = <div className='col-4-5'>{"Task List Will Show Here"}</div>;
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
