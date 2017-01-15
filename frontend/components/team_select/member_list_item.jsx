import React from 'react';

export default props => {
  let image;
  if (props.memberImage) {
    image = <img className='small-user-img' src={props.memberImage} />;
  } else {
    image = <i className={`fa fa-user-circle`} aria-hidden="true" />;
  }

  return (
    <div>
      {image}
    </div>
  );
};
