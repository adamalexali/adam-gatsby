import * as React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../theme/globalStyle';
import './reset.module.css';
import styled from 'styled-components';

// styles
const StyledMain = styled.main`
  height: 100vh;
  padding: 1rem;
`;

// markup
const Content = ({ pageMeta, children }) => {
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
          <meta name='keywords' content={pageMeta.keywords.join(',')} />
          <title>{pageMeta.title}</title>
          <link rel='stylesheet' href='../theme/reset.css' />
        </Helmet>
        {children}
      </StyledMain>
    </>
  );
};

Content.defaultProps = {
  pageMeta: {
    title: 'Adam Ali — Digital Experience Designer, Prototyper, UX Researcher',
    description:
      'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
    keywords: ['ux', 'front-end', 'designer', 'developer'],
  },
};

export default Content;
