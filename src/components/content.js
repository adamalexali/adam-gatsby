import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../theme/globalStyle';
import styled from 'styled-components';

// styles
const StyledMain = styled.main`
  height: 100vh;
  padding: 1rem;
`;

// markup
//something wrong with query MyQuery...
const Content = ({ pageMeta, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Helmet>
          <meta charSet='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='author' content='Adam Ali' />

          <meta name='description' content={pageMeta.description} />
          <title>
            {pageMeta.title} | {data.site.siteMetadata.title}
          </title>
          <link rel='stylesheet' href='../theme/reset.css' />
        </Helmet>
        {children}
      </StyledMain>
    </>
  );
};

// defaultProps doesn't seem to work with Gatsby, look at https://www.gatsbyjs.com/docs/add-seo-component/ for more info, it mentions using it.

// Content.propTypes = {
//   pageMeta: {
//     title: PropTypes.string,
//     description: PropTypes.string,
//   },
// };

// Content.defaultProps = {
//   pageMeta: {
//     title: 'Hello!',
//     description:
//       'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
//     keywords: ['ux', 'front-end', 'designer', 'developer'],
//   },
// };

export default Content;
