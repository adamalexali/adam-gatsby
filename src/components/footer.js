import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styles
const Container = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.footer`
  margin-bottom: 1rem;
  font-size: 0.75rem;
`;

// component
const Footer = () => {
  return (
    <Container>
      <FooterText>
        Created with{' '}
        <span role='img' aria-label='red heart emoji'>
          ❤️
        </span>{' '}
        by Adam using <a href='https://www.gatsbyjs.com/'>Gatsby</a>
      </FooterText>
    </Container>
  );
};

export default Footer;
