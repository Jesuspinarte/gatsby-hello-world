// External imports
import React from 'react';
import { Link } from 'gatsby';

// Internal imports
// -- Organisms
import Header from '../components/organisms/header/header';

const Contact = () => (
  <div style={{ color: 'teal' }}>
    <Link to='/'>Home</Link>
    <Header headerText='Contact' />
    <p>Send us a message!</p>
  </div>
);

export default Contact;
