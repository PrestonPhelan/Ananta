import React from 'react';

import Header from './header/header';

export default ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
);
