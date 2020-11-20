// External imports
import React from 'react';
import { Link } from 'gatsby';

// Internal imports
// -- Atoms
import ListLink from '../../atoms/list-link/ListLink';

const Header = () => (
  <header style={{ margin: '3rem auto', maxWidth: 650, padding: '0' }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>MySweetSite</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink toGo="/">Home</ListLink>
      <ListLink toGo="/about/">About</ListLink>
      <ListLink toGo="/contact/">Contact</ListLink>
      <ListLink toGo="/about-css-module/">About CSS</ListLink>
    </ul>
  </header>
);

export default Header;
