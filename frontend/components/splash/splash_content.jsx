import React from 'react';

import SplashGif from './splash_gif';
import SplashForm from './splash_form';

const SplashContent = () => {
  return (
    <div className='splash-content'>
      <SplashGif />
      <SplashForm />
    </div>
  );
};

export default SplashContent;
