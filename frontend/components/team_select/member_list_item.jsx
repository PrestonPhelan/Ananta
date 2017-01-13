import React from 'react';

export default props => {
  let image;
  if (props.memberImage) {
    image = <img className='small-user-img' src={props.memberImage} />;
  } else {
    image = "Default image";
  }

  return (
    <div>
      {image}
    </div>
  );
};
