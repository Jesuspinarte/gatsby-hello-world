// External imports
import React from 'react';
import { Link } from 'gatsby';

// Internal imports
// -- Organisms
import Header from '../components/organisms/header/header';

const Home = () => (
  <div style={{ color: 'purple' }}>
    <Link to='/contact/'>Contact</Link>
    <Header headerText='Hello Gatsby site!' />
    <p>What a world...</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
);

export default Home;