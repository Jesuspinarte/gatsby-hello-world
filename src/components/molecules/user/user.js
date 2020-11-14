// External imports
import React from 'react';

// Internal imports
import classes from './user.module.css';

const User = ({ avatar, username, excerpt }) => (
  <div className={classes.user}>
    <img src={avatar} className={classes.avatar} alt="" />
    <div className={classes.description}>
      <h2 className={classes.username}>{username}</h2>
      <p className={classes.excerpt}>{excerpt}</p>
    </div>
  </div>
);

export default User;
