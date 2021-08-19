import * as React from 'react';
import styled from 'styled-components';

// styles
const StyledFooter = styled.footer`
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 0.75rem;
`;

// component
const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Created with{' '}
        <span role='img' aria-label='heart ASCII character'>
          ♥
        </span>{' '}
        by Adam using <a href='https://www.gatsbyjs.com/'>Gatsby</a>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
