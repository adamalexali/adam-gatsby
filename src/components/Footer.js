import * as React from 'react';
import { StyledFooter, FooterText } from '../theme/styled-elements';

// component
const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Created with{' '}
        <span role='img' aria-label='unicode white heart suit'>
          ♡
        </span>{' '}
        by Adam
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
