import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Footer from '../components/footer';

// styles
const MainContent = styled('main')`
  font-family: -apple-system, Roboto, sans-serif, serif;
  color: #333333;
  max-width: 500px;
  margin: 5rem 2rem 0 2rem;
  height: 80vh;
`;

const HeadingText = styled.h1`
  margin: 1rem 0;
  max-width: 500px;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const accentText = {
  color: '#4c80ff',
};

// markup
const IndexPage = () => {
  return (
    <>
      <MainContent>
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Adam Ali — Digital Experience Designer, Prototyper, UX Researcher
          </title>
          <meta
            name='description'
            content='Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good.'
          />
          <link rel='canonical' href='https://adamalexali.com' />
        </Helmet>
        <HeadingText>
          Welcome!
          <br />
          <span style={accentText}>
            — this site is under development. Check back soon!
          </span>
        </HeadingText>
        <Paragraph>
          In the meantime, feel free to{' '}
          <Link to='/about'>learn a bit more about me</Link>.
        </Paragraph>
      </MainContent>
      <Footer />
    </>
  );
};

export default IndexPage;
