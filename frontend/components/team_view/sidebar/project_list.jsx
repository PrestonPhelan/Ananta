import React from 'react';

export default ({ projects }) => {
  const projectNames = Object.values(projects).map( project => project.name );
  return (
    <div>
      {projectNames}
    </div>
  );
};
