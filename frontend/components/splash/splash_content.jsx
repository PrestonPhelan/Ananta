import React from 'react';

import SplashGif from './splash_gif';
import SplashFormContainer from './splash_form_container';

const SplashContent = () => {
  return (
    <div className='splash-content'>
      <SplashGif />
      <SplashFormContainer />
    </div>
  );
};

export default SplashContent;
