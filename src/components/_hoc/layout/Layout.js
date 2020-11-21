// External imports
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Internal imports
import classes from './Layout.module.css';
// -- Organisms
import Header from '../../organisms/header/Header';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className={classes.layout}>
      <h3>{data.site.siteMetadata.title}</h3>
      <Header />
      {children}
    </div>
  );
};
