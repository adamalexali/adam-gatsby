import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import {
  Paragraph,
  StyledSection,
  ItalicSpan,
  BoldSpan,
} from '../theme/styled-elements';
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

  const customCrumbLabel = location.pathname.toLowerCase().replace('/', ' ');

  return (
    <>
      <Content
        pageMeta={{
          title: '',
          description:
            'Adam Ali is a multidisciplinary developer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <Paragraph>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=' / '
              crumbLabel='home'
            />
          </Paragraph>
        </section>

        <section>
          <h1>
            Hello!{' '}
            <span role='img' aria-label='gem stone emoji'>
              💎
            </span>{' '}
            <br />
          </h1>
          <Paragraph>
            I'm{' '}
            <BoldSpan>
              Adam—a human-focused UX developer, researcher, and techno-optimist
            </BoldSpan>{' '}
            exploring the intersections of people, design, and technology.
            Welcome to my little corner of the internet—a digital garden where I
            share my thoughts and what I'm working on. If you'd like, you can
            also <Link to='/about'>find out more about me</Link>, and what I am
            up to when I'm not working!
          </Paragraph>
          <Paragraph>
            I am particularly interested in user experience design,
            human-machine interaction, web 3.0, and the relationship between
            tech &amp; ethics. I write about these topics and more in my{' '}
            <Link to='/garden'>digital garden</Link>.
          </Paragraph>
          <Paragraph>
            Ultimately, I want to create more accessible, inclusive, and open
            digital public spaces—in whatever ways I can achieve that! I'm
            optimistic about the future, and want to contribute my part to
            shaping it.
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
                <BoldSpan>Exploring digital accessibility</BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan>{' '}
                <a
                  href='https://www.georgebrown.ca/about/office-of-research-innovation'
                  target='_blank'
                  rel='noreferrer'
                >
                  GBC Research &amp; Innovation
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying digital experience design </BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a
                  href='https://www.georgebrown.ca/'
                  target='_blank'
                  rel='noreferrer'
                >
                  George Brown College
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying computer science</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a href='https://www.edx.org/' target='_blank' rel='noreferrer'>
                  edX
                </a>
              </Paragraph>
            </li>
            {/* <li>
              <Paragraph>
                <BoldSpan>Freelancing web development</BoldSpan>{' '}
                <ItalicSpan>using</ItalicSpan>{' '}
                <a href='https://webflow.com' target='_blank' rel='noreferrer'>
                  Webflow
                </a>
              </Paragraph>
            </li> */}
            <li>
              <Paragraph>
                <BoldSpan>Building projects</BoldSpan>{' '}
                <ItalicSpan>using</ItalicSpan>{' '}
                <a
                  href='https://github.com/adamalexali'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </Paragraph>
            </li>
            {/* <li>
              <Paragraph>
                <BoldSpan>Writing about tech & design</BoldSpan>{' '}
                <ItalicSpan>on</ItalicSpan>{' '}
                <a href='https://medium.com/@adamalexali'>Medium</a>
              </Paragraph>
            </li> */}
          </ul>
        </StyledSection>

        <StyledSection>
          <h2>Previously…</h2>
          <ul>
            <li>
              <Paragraph>
                <BoldSpan>Studying interaction design</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a
                  href='https://www.georgebrown.ca/'
                  target='_blank'
                  rel='noreferrer'
                >
                  George Brown College
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Exploring AR and ecommerce</BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan>{' '}
                <a
                  href='https://www.georgebrown.ca/about/office-of-research-innovation'
                  target='_blank'
                  rel='noreferrer'
                >
                  GBC Research &amp; Innovation
                </a>
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
