import * as React from 'react';
import GlobalStyle from '../theme/globalStyle';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

// styles
const StyledMain = styled.main`
  height: 85vh;
  padding: 1rem;
`;

// markup
const Content = (props) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{props.title}</title>
          <meta name='description' content={props.desc} />
        </Helmet>
        {props.children}
      </StyledMain>
    </>
  );
};

Content.defaultProps = {
  title: 'Adam Ali — Digital Experience Designer, Prototyper, UX Researcher',
  desc: 'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
};

export default Content;
