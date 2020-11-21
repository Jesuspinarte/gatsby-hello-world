// External imports
import React from 'react';
import { graphql } from 'gatsby';

// Internal imports
// -- HOC
import Layout from '../components/_hoc/layout/Layout';

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
);

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// export default About;
