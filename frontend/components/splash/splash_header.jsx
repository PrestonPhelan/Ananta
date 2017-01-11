import React from 'react';

import SplashLogo from './splash_logo';
import SplashButtonContainer from './splash_button_container';

const SplashHeader = () => {
  return (
    <div>
      <h3>{"I'm the splash header!"}</h3>
      <SplashLogo />
      <SplashButtonContainer />
    </div>
  );
};

export default SplashHeader;
