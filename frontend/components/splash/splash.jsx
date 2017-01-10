import React from 'react';

import SplashHeader from './splash_header';
import SplashContent from './splash_content';

const Splash = () => {
  const testText = "I'm in the splash container!";
  return (
    <div>
      <h2>{testText}</h2>
      <SplashHeader />
      <SplashContent />
    </div>
  );
};

export default Splash;
