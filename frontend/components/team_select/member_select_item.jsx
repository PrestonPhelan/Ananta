import React, { Component } from 'react';

class MemberSelectItem extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = { selected: false };
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect(id) {
    return e => {
      const isSelected = this.state.selected;
      this.setState( { selected: !isSelected });
      this.props.onClick(this.props.user);
    };
  }

  render() {
    let icon;

    if (this.props.user.image_url) {
      icon = (
        <div className='custom-select-item'>
          <img
            className={`
              team-select-icon
              ${this.state.selected ?
                'user-image-selected':
                'team-select-user-image'
              }
            `}
            src={this.props.user.image_url}
            key={this.props.user.id}/> <br/>
        </div>
        );
    } else {
      icon = (
          <div className='default-select-item'>
            <i
              className={`fa fa-user-circle team-select-icon
                ${this.state.selected ? 'default-image-selected': ''}`}
              key={this.props.user.id}
              aria-hidden="true"
            />
          </div>
      );
    }

    let displayName;
    let reg = /^.[a-z]*/;
    if (this.props.user.username.length > 10) {
      displayName = this.props.user.username.match(reg);
      if (displayName.length > 10) {
        displayName = displayName.slice(0, 7) + "...";
      }
    } else {
      displayName = this.props.user.username;
    }

    return (
      <div className='member-select-item' onClick={this.toggleSelect(this.props.user.id)}>
        <span className='member-select-icon'>{icon}</span>
        <span className='member-select-username'>
          {displayName}
        </span>
      </div>
    );
  }

}

export default MemberSelectItem;
