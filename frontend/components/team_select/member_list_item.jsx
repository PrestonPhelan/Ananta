import React from 'react';

export default props => {
  let image;
  if (props.image_url) {
    image = props.image_url;
  } else {
    image = "Default image";
  }

  return (
    <div>
      {"I'm a member list item!"}
      {image}
    </div>
  );
};
