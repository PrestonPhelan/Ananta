import React, { Component } from 'react';

import { getDisplayName } from '../../util/name_util';

class MemberSelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: (this.props.selected || false) };
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      if (newProps.selected) {
        this.setState( { selected: true });
      } else if (newProps.selected === false) {
        this.setState( { selected: false });
      }
    }
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

    const displayName = getDisplayName(this.props.user.username);

    return (
      <div className='member-select-item' onClick={this.toggleSelect(this.props.user.id)}>
        <div className='member-select-icon'>{icon}</div>
        <div className='member-select-username'>
          {displayName}
        </div>
      </div>
    );
  }

}

export default MemberSelectItem;
