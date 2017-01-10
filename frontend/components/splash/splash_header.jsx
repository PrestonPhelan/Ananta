import React from 'react';

import SplashLogo from './splash_logo';
import SplashButtons from './splash_buttons';

const SplashHeader = () => {
  return (
    <div>
      <h3>{"I'm the splash header!"}</h3>
      <SplashLogo />
      <SplashButtons />
    </div>
  );
};

export default SplashHeader;
