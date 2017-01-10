import React from 'react';

import SplashGif from './splash_gif';
import SplashForm from './splash_form';

const SplashContent = () => {
  return (
    <div>
      <h3>{"I'm the splash content!"}</h3>
      <SplashGif />
      <SplashForm />
    </div>
  );
};

export default SplashContent;
