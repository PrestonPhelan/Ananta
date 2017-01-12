import React from 'react';

const App = ({ children, currentUser }) => {
  let displayName;

  if (currentUser) {
    displayName = currentUser.username;
  } else {
    displayName = "No one";
  }

  return (
    <div>
      { children }
      <p className='user-render'>
        { displayName }{" is logged in."}
      </p>
    </div>
  );
};

export default App;
