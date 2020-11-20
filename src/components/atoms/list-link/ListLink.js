// External imports
import React from 'react';
import { Link } from 'gatsby';

// Intertal imports

const ListLink = ({ toGo, children }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={toGo}>{children}</Link>
  </li>
);

export default ListLink;
