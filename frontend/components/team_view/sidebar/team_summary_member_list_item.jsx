import React from 'react';

export default ({ member }) => {
  let image;
  if (member.image_url) {
    image = <img className='small-user-img' src={member.image_url} />;
  } else {
    image = <i className={`fa fa-user-circle`} aria-hidden="true" />;
  }

  return (
    <div className='ts-member-list-item'>
      {image}
    </div>
  );
};
