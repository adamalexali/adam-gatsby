import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import {
  Paragraph,
  StyledSection,
  StyledNav,
  ItalicSpan,
  BoldSpan,
  StyledUl,
} from '../theme/styled-elements';
import ThemeToggle from '../components/themeToggle';
import Content from '../components/content';
import Footer from '../components/footer';

// markup
const IndexPage = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const StyledLI = styled.li`
    margin-bottom: 1rem;
  `;

  const ProjectsUl = styled.ul`
    margin-top: 1rem;
  `;

  return (
    <>
      <Content
        pageMeta={{
          title: '',
          description:
            'Adam Ali is a multidisciplinary developer exploring the intersections of people, design, and technology.',
        }}
      >
        <StyledNav>
          <p>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=' / '
              crumbLabel='home'
            />
          </p>
          <ThemeToggle />
        </StyledNav>

        <section>
          <h1>Adam Ali</h1>
          <Paragraph>
            Hello! I'm Adam &#40;he/him&#41;, a human-centered{' '}
            <abbr title='user experience'>UX</abbr> developer and researcher
            equipped with an interdisciplinary foundation in digital
            experience—including UX,{' '}
            <abbr title='human-computer interaction'>HCI</abbr>, web
            development, systems design, and service design.
          </Paragraph>
          <Paragraph>Welcome to my little corner of the internet!</Paragraph>

          {/* ************************************ */}
          <Paragraph>
            <BoldSpan>
              This site is currently being overhauled—but feel free to{' '}
              <Link to='/resume'>view my resume</Link> for more info, or just
              shoot me a message on{' '}
              <a
                href='https://twitter.com/adamalexali/'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>{' '}
              or{' '}
              <a
                href='https://www.linkedin.com/in/adamalexali/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>{' '}
              &#40;or by{' '}
              <a
                href='mailto:adamalexali@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                email
              </a>{' '}
              &#41;.
            </BoldSpan>
          </Paragraph>

          <Paragraph>Stay tuned :&#41;</Paragraph>

          {/* <Paragraph>
            I am particularly interested in user experience design,
            human-computer interaction, service design, networks, and the
            relationship between tech &amp; ethics. You can{' '}
            <Link to='/about'>find out more about me &amp; my interests</Link>,
            if you're curious.
          </Paragraph> */}
          {/* <Paragraph>
            I am particularly interested in user experience &#40;UX&#41; design,
            human-computer interaction &#40;HCI&#41;, service design, the
            decentralized web, and the relationship between tech &amp; ethics. I
            write about a lot of these topics in my "
            <a
              href='https://github.com/adamalexali/obsidian'
              target='_blank'
              rel='noreferrer'
            >
              digital garden
            </a>
            " &#40;and soon{' '}
            <a
              href='https://mirror.xyz/0x836a88571b10B03149d77607aE2c99A084E713a0'
              target='_blank'
              rel='noreferrer'
            >
              Mirror
            </a>
            &#41;. You can{' '}
            <Link to='/about'>find out more about me &amp; my interests</Link>,
            if you're curious.
          </Paragraph> */}
          {/* <Paragraph>
            Ultimately, I want to create more accessible, inclusive, and open
            digital public spaces—in whatever ways I can achieve that. I'm
            excited about the future, and want to contribute my part to shaping
            it.
          </Paragraph>
          <Paragraph>
            Don't hesitate to reach out!{' '}
            <BoldSpan>
              If you're interested in working together, you can{' '}
              <Link to='/resume'>view my resume</Link>,
            </BoldSpan>{' '}
            or just shoot me a message on{' '}
            <a
              href='https://twitter.com/adamalexali/'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>{' '}
            or{' '}
            <a
              href='https://www.linkedin.com/in/adamalexali/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>{' '}
            &#40;or{' '}
            <a
              href='mailto:adamalexali@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              email me
            </a>{' '}
            if you want to get real archaic!&#41;.
          </Paragraph> */}
        </section>

        {/* <StyledSection>
          <h2>Selected Works</h2>
          <Paragraph>
            Below you'll find case studies of some of my recent work as an
            experience designer. This includes work as a front-end developer and
            a UX researcher/designer.
          </Paragraph>
          <Paragraph>
            You can also see samples my design work by visiting my{' '}
            <a
              href='https://www.behance.net/adamalexali'
              target='_blank'
              rel='noreferrer'
            >
              Behance
            </a>{' '}
            profile.
          </Paragraph>
          <ProjectsUl>
            <StyledLI>
              <h3>
                <Link to='/work/lmh-coop'>
                  Front-End Co-op Placement (
                  <time dateTime='2020-01'>January 2020</time>
                  &ndash;
                  <time dateTime='2020-05'>May 2020</time>)
                </Link>
              </h3>
              <StyledUl>
                <li>
                  Co-op placement developing a web platform for connecting users
                  with personalized mental health services.
                </li>
              </StyledUl>
            </StyledLI>
            <StyledLI>
              <h3>
                <Link to='/work/gbc-ar-research'>
                  Augmented Reality UX Research Project (
                  <time dateTime='2019-09'>September 2019</time>
                  &ndash;
                  <time dateTime='2020-06'>June 2020</time>)
                </Link>
              </h3>
              <StyledUl>
                <li>
                  UX research project exploring integration of augmented reality
                  for digital products &amp; services.
                </li>
              </StyledUl>
            </StyledLI>
          </ProjectsUl>
        </StyledSection>
        <StyledSection>
          <h2>Currently…</h2>
          <ul>
            <li>
              <Paragraph>
                <BoldSpan>Looking for a job</BoldSpan>{' '}
                <ItalicSpan>in</ItalicSpan> UX and/or development fields
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying digital experience design </BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan> George Brown College
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying computer science</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan> edX
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Building projects</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan> Github
              </Paragraph>
            </li>
          </ul>
        </StyledSection>

        <section>
          <h2>Previously…</h2>
          <ul>
            <li>
              <Paragraph>
                <BoldSpan>
                  Evaluating web accessibility of e-learning platforms
                </BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan> GBC Research & Innovation
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying interaction design</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan> George Brown College
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>
                  Exploring <abbr title='extended reality'>XR</abbr> &amp;
                  ecommerce
                </BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan> GBC Research &amp; Innovation
              </Paragraph>
            </li>
          </ul>
        </section> */}
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
