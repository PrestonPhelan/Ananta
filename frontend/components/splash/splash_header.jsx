import React from 'react';

import SplashLogo from './splash_logo';
import SplashButtonContainer from './splash_button_container';

const SplashHeader = () => {
  return (
    <div className='splash-header'>
      <SplashLogo />
      <SplashButtonContainer />
    </div>
  );
};

export default SplashHeader;
