import * as React from 'react';
import { StyledFooter, FooterText } from '../theme/styled-elements';

// component
const Footer = () => {
  return (
    <StyledFooter>
      <ul className='footerList'>
        <li>
          <a
            href='https://twitter.com/adamalexali'
            target='_blank'
            rel='noreferrer'
            className='external-link'
          >
            Twitter
          </a>
        </li>{' '}
        |{' '}
        <li>
          <a
            href='https://github.com/adamalexali'
            target='_blank'
            rel='noreferrer'
            className='external-link'
          >
            GitHub
          </a>
        </li>{' '}
        |{' '}
        <li>
          <a
            href='https://www.linkedin.com/in/adamalexali/'
            target='_blank'
            rel='noreferrer'
            className='external-link'
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p>
        Created with{' '}
        <span role='img' aria-label='unicode white heart suit'>
          ♡
        </span>{' '}
        by Adam
      </p>
      {/* <p>
        {' '}
        <a
          href='https://github.com/adamalexali/adam-gatsby'
          target='_blank'
          rel='noreferrer'
          className='external-link'
        >
          source
        </a>{' '}
      </p> */}
      {/* Other attribution: */}
      {/* Favicon generated from Twitter Twemoji: */}
      {/* - Graphics Title: 1f48e.svg*/}
      {/* - Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji) */}
      {/* - Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f48e.svg */}
      {/* - Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
       */}
    </StyledFooter>
  );
};

export default Footer;
