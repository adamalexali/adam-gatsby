import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/Content';
import Footer from '../components/footer';

// styles
// const Container = styled.div`
//   // margin: 1rem auto 0 auto;
//   max-width: 500px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: center;
// `;

const HeadingText = styled.h1`
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const AboutPage = () => {
  return (
    <>
      {/* <MainContent>
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Adam Ali — Digital Experience Designer, Prototyper, UX Researcher;
            About
          </title>
        </Helmet>
        <Link to='/'>Main page</Link>
        <Container>
          <HeadingText>Hi there!</HeadingText>
          <Paragraph>
            My name's Adam. Since I was young, I’ve loved technology and design.
            I grew up in the early days of the internet, and it had a huge
            influence on me. I'm old enough to remember a time before our lives
            were dominanted by the massive platforms of today... where the
            internet was an exciting and uncharted field of discovery and
            information.
          </Paragraph>
          <Paragraph>
            I want to be part of the community that examines and designs what
            the future of digital connectivity is.
          </Paragraph>
          <Paragraph>
            When I’m not working or in school, I like to spend my time playing
            video games, watching anime, reading, running, or lifting weights.
            I’m currently living &amp; working in the GTA, looking forward to
            life after the pandemic!{' '}
            <span role='img' aria-label='Grinning emoji'>
              😃
            </span>
          </Paragraph>
        </Container>
      </MainContent> */}
      <Link to='/'>Home</Link>
      <Content title='About; Adam Ali — Digital Experience Designer, Prototyper, UX Researcher'>
        <HeadingText>Hi there!</HeadingText>
        <Paragraph>
          My name's Adam. Since I was young, I’ve loved technology and design. I
          grew up in the early days of the internet, and it had a huge influence
          on me. I'm old enough to remember a time before our lives were
          dominanted by the massive platforms of today... where the internet was
          an exciting and uncharted field of discovery and information.
        </Paragraph>
        <Paragraph>
          I want to be part of the community that examines and designs what the
          future of digital connectivity is.
        </Paragraph>
        <Paragraph>
          When I’m not working or in school, I like to spend my time playing
          video games, watching anime, reading, running, or lifting weights. I’m
          currently living &amp; working in the GTA, looking forward to life
          after the pandemic!{' '}
          <span role='img' aria-label='Grinning emoji'>
            😃
          </span>
        </Paragraph>
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
