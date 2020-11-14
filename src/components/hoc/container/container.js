// External imports
import React from 'react';

// Internal imports
import classes from './container.module.css';

const Container = ({ children }) => (
  <div className={classes.container}>
    {children}
  </div>
);

export default Container;
