import React from 'react';

import SplashHeader from './splash_header';
import SplashContent from './splash_content';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <SplashHeader />
        <SplashContent />
      </div>
    );
  }
}

export default Splash;
