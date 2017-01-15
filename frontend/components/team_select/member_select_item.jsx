import React, { Component } from 'react';

class MemberSelectItem extends Component {
  constructor(props) {
    super(props);

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
        <div className="team-select-custom-image">
          <img
            className={`
              team-select-icon
              ${this.state.selected ?
                'user-image-selected':
                'team-select-user-image'
              }
            `}
            src={this.props.user.image_url}
            key={this.props.user.id}/>
        </div>);
    } else {
      icon = (
        <div className="team-select-default-image">
          <i
            className={`fa fa-user-circle team-select-icon
              ${this.state.selected ? 'default-image-selected': ''}`}
            key={this.props.user.id}
            aria-hidden="true"
          />
        </div>
      );
    }

    return (
      <div onClick={this.toggleSelect(this.props.user.id)}>
        {icon} <br />
        <span className='member-select-username'>
          {this.props.user.username}
        </span>
      </div>
    );
  }

}

export default MemberSelectItem;
