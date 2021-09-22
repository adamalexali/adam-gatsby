import * as React from 'react';
import styled from 'styled-components';

// styles
const StyledFooter = styled.footer`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
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
        by Adam using{' '}
        <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
          Gatsby
        </a>
      </FooterText>

      <FooterText>
        &#123;{' '}
        <a
          href='https://github.com/adamalexali/adam-gatsby'
          target='_blank'
          rel='noreferrer'
        >
          source
        </a>{' '}
        &#125;
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
