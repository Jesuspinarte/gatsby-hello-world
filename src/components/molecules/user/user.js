// External imports
import React from 'react';

// Internal imports
import classes from './User.module.css';

export default ({ avatar, username, excerpt }) => (
  <div className={classes.m_user}>
    <img src={avatar} className={classes.m_user__avatar} alt="" />
    <div className={classes.m_user__description}>
      <h2 className={classes.m_user__username}>{username}</h2>
      <p className={classes.m_user__excerpt}>{excerpt}</p>
    </div>
  </div>
);
