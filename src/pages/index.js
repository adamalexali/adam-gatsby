import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import {
  Paragraph,
  StyledSection,
  StyledNav,
  ItalicSpan,
  BoldSpan,
} from '../theme/styled-elements';
import ThemeToggle from '../components/themeToggle';
import Content from '../components/content';
import Footer from '../components/footer';

// markup
const IndexPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  // const customCrumbLabel = location.pathname.toLowerCase().replace('/', ' ');

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
          <h1>
            <span role='img' aria-label='waving hand emoji'>
              👋
            </span>{' '}
            Hello!
          </h1>
          <Paragraph>
            I'm{' '}
            <BoldSpan>
              Adam—a human-centered UX developer, researcher, and technologist
            </BoldSpan>{' '}
            equipped with an interdisciplinary foundation in digital
            experience—including UX, HCI, web development, systems design, and
            service design.
          </Paragraph>
          <Paragraph>
            Welcome to my little corner of the internet, where I share my
            thoughts &amp; what I'm working on. If you'd like, you can also{' '}
            <Link to='/about'>find out more about me</Link>, and what I am up to
            when I'm not working!
          </Paragraph>
          <Paragraph>
            I am particularly interested in user experience design,
            human-machine interaction, web 3.0, and the relationship between
            tech &amp; ethics. I write about these topics and more in my{' '}
            <a
              href='https://github.com/adamalexali/adam-obsidian'
              target='_blank'
              rel='noreferrer'
            >
              digital garden
            </a>
            .
          </Paragraph>
          <Paragraph>
            Ultimately, I want to create more accessible, inclusive, and open
            digital public spaces—in whatever ways I can achieve that. I'm
            excited about the future, and want to contribute my part to shaping
            it.
          </Paragraph>
          <Paragraph>
            Don't hesitate to reach out!{' '}
            <BoldSpan>
              If you're interested in working together, you can{' '}
              <a
                href={data.allFile.edges[0].node.publicURL}
                target='_blank'
                rel='noreferrer'
              >
                download my resume
              </a>
            </BoldSpan>{' '}
            or shoot me a message on{' '}
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
            </a>
            . Feel free to check out my{' '}
            <a
              href='https://www.github.com/adamalexali/'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>{' '}
            as well.
          </Paragraph>
        </section>

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
                <ItalicSpan>at</ItalicSpan>{' '}
                <a
                  href='https://github.com/adamalexali'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </Paragraph>
            </li>
          </ul>
        </StyledSection>

        <StyledSection>
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
                <BoldSpan>Exploring AR &amp; ecommerce</BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan> GBC Research &amp; Innovation
              </Paragraph>
            </li>
          </ul>
        </StyledSection>
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
