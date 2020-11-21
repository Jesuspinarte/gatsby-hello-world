// External imports
import React from 'react';

// Internal imports
import classes from './Container.module.css';

export default ({ children }) => (
  <div className={classes.container}>
    {children}
  </div>
);
