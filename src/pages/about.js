import * as React from 'react';
import {
  Paragraph,
  StyledSection,
  StyledNav,
  StyledUl,
} from '../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import ThemeToggle from '../components/themeToggle';
import Content from '../components/content';
import Footer from '../components/footer';

const AboutPage = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace('/', ' ');

  return (
    <>
      <Content
        pageMeta={{
          title: 'About |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary developer exploring the intersections of people, design, and technology.',
        }}
      >
        <StyledNav>
          <p>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=' / '
              crumbLabel={customCrumbLabel}
            />
          </p>
          <ThemeToggle />
        </StyledNav>

        <section>
          <h1>About me</h1>
          <Paragraph>
            It's always nice to know a little bit more about each other—I'm
            grateful you are taking the time to find out more &amp; I would love
            to hear from you!
          </Paragraph>
          <Paragraph>
            I am currently a student at George Brown College, completing a
            Honours Bachelor of Design, specifically focusing on Digital
            Experience Design. Before that, I studied and received an Advanced
            Diploma in Interaction Design.
          </Paragraph>
          <Paragraph>
            Below are a few of the things I've been engaging with lately.
          </Paragraph>
          {/* <Paragraph>
          Consider reaching out using the form below, and we can connect, chat,
          & collaborate!
        </Paragraph> */}
        </section>

        <StyledSection>
          <h2>Reading…</h2>
          <Paragraph>
            I love starting my day reading—I try to do at least 30 mins and
            contribute to my{' '}
            <a
              href='https://github.com/adamalexali/adam-obsidian'
              target='_blank'
              rel='noreferrer'
            >
              notes
            </a>{' '}
            everyday. Let me know if you have a recommendation!
          </Paragraph>
        </StyledSection>

        <StyledSection>
          <h2>Writing…</h2>
          <Paragraph>
            Recently, I've wanted to get more into writing more formally. I am
            working on a few articles currently… stay tuned.
          </Paragraph>
        </StyledSection>

        <StyledSection>
          <h2>Listening…</h2>
          <Paragraph>
            I really like a lot of diverse types of music, but my favourite has
            to be metal (I won't get pedantic about the subgenres).
          </Paragraph>
          <Paragraph>
            Hip hop and old-school soul are both up there as well.
          </Paragraph>
        </StyledSection>

        <section>
          <h2>Playing…</h2>
          <Paragraph>
            Ever since I was young I've played video games. These days I feel
            like I have less and less time to play, but I still like to keep up
            with the latest news and hop on every now and then.
          </Paragraph>
          <Paragraph>Some of the game I'm playing lately include:</Paragraph>
          <StyledUl>
            <li>
              <Paragraph>Valorant</Paragraph>
            </li>
            <li>
              <Paragraph>Halo Infinite</Paragraph>
            </li>
            <li>
              <Paragraph>Pillars of Eternity</Paragraph>
            </li>
          </StyledUl>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
