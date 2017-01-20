import React from 'react';

import SplashHeader from './splash_header';
import SplashContent from './splash_content';
import SplashFooter from './splash_footer';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <SplashHeader />
        <SplashContent />
        <SplashFooter />
      </div>
    );
  }
}

export default Splash;
