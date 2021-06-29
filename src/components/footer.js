import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
// styles
const footerStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  fontSize: 12,
  marginBottom: 32,
};

const Footer = () => {
  return (
    <Container>
      <p style={footerStyles}>
        Created with{' '}
        <span role='img' aria-label='heart emoji'>
          ❤️
        </span>{' '}
        by Adam using <a href='https://www.gatsbyjs.com/'>Gatsby</a>
      </p>
    </Container>
  );
};

export default Footer;
