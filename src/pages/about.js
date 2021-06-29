import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Footer from '../components/footer';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 16,
  marginBottom: 32,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 32,
};

const AboutPage = () => {
  return (
    <>
      <main style={pageStyles}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Adam Ali — Digital Experience Designer, Prototyper, UX Researcher;
            About
          </title>
        </Helmet>
        <Link to='/' style={paragraphStyles}>
          Main page
        </Link>
        <h1 style={headingStyles}>Hi there!</h1>
        <p style={paragraphStyles}>
          My name's Adam. Since I was young, I’ve loved technology and design. I
          grew up in the early days of the internet, and it had a huge influence
          on me. I'm old enough to remember a time before our lives were
          dominanted by the massive platforms of today... where the internet was
          an exciting and uncharted field of discovery and information.
        </p>
        <p style={paragraphStyles}>
          I want to be part of the community that examines and designs what the
          future of digital connectivity is.
        </p>
        <p style={paragraphStyles}>
          When I’m not working or in school, I like to spend my time playing
          video games, watching anime, reading, running, or lifting weights. I’m
          currently living &amp; working in the GTA, looking forward to life
          after the pandemic{' '}
          <span role='img' aria-label='Grinning emoji'>
            😃
          </span>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
