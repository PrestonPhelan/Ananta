import React from 'react';

export default props => {
  let image;
  if (props.memberImage) {
    image = <img className='small-user-img' src={props.memberImage} />;
  } else {
    image = <i className={`fa fa-user-circle small-default-img`} aria-hidden="true" />;
  }

  return (
    <div className='member-list'>
      {image}
    </div>
  );
};
