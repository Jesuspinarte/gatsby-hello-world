// External imports
import React from 'react';
import { Link } from 'gatsby';

// Internal imports
import classes from './Header.module.css';
// -- Atoms
import ListLink from '../../atoms/list-link/ListLink';

export default () => (
  <header className={classes.o_header}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 className={classes.o_header__title}>MySweetSite</h3>
    </Link>
    <ul className={classes.o_header__list}>
      <ListLink toGo="/">Home</ListLink>
      <ListLink toGo="/about/">About</ListLink>
      <ListLink toGo="/contact/">Contact</ListLink>
      <ListLink toGo="/about-css-module/">About CSS</ListLink>
    </ul>
  </header>
);
