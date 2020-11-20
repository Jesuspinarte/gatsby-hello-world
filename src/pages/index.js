// External imports
import React from 'react';

// Internal imports
// -- HOC
import Layout from '../components/_hoc/layout/Layout';

const Home = () => (
  <Layout>
    <p>What a world...</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
);

export default Home;
