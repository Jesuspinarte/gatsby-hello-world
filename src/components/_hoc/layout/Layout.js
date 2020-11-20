// External imports
import React from 'react';

// Internal imports
// -- Organisms
import Header from '../../organisms/header/Header';

const Layout = ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <h3>Jesúspinarte</h3>
    <Header />
    {children}
  </div>
);

export default Layout;
