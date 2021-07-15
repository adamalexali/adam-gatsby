import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// styles
const HeadingText = styled.h1`
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

// markup
const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: '404',
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
        }}
      >
        <HeadingText>Page not found</HeadingText>
        <Paragraph>
          Sorry{' '}
          <span role='img' aria-label='Pensive emoji'>
            😔
          </span>{' '}
          that page couldn't be retrieved.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to='/'>Go home</Link>.
        </Paragraph>
      </Content>
      <Footer />
    </>
  );
};

export default NotFoundPage;
