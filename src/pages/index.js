import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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

const accentText = {
  color: '#C4C4C4',
};

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: 'Home',
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
        }}
      >
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
        {/* <StaticImage
          alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
          src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
        /> */}
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
