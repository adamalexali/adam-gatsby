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
            I am currently a student at George Brown College, completing a
            Honours Bachelor of Digital Experience Design, Before that, I
            studied and received an Advanced Diploma in Interaction Design also
            from George Brown. I've also self-taught myself software development
            and computer science fundamentals in my spare time.
          </Paragraph>
          <Paragraph>
            I am particularly interested in user experience &#40;UX&#41; design,
            human-computer interaction &#40;HCI&#41;, web 3.0, and the
            relationship between tech &amp; ethics. I write about these topics
            and more in my{' '}
            <a
              href='https://github.com/adamalexali/adam-obsidian'
              target='_blank'
              rel='noreferrer'
            >
              digital garden
            </a>{' '}
            &#40;and soon on{' '}
            <a
              href='https://mirror.xyz/0x836a88571b10B03149d77607aE2c99A084E713a0'
              target='_blank'
              rel='noreferrer'
            >
              Mirror
            </a>
            &#41;.
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
