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

        {/* <section>
          <h1>About me</h1>
          <Paragraph>
            I am currently a student at George Brown College, completing a
            Honours Bachelor of Digital Experience Design. Before that, I
            studied and received an Advanced Diploma in Interaction Design, also
            from George Brown. I've also self-taught myself software development
            and computer science in my spare time.
          </Paragraph>
          <Paragraph>
            Throughout my academic and professional career, I've worked
            "end-to-end"; i.e., I do work within a number of different roles
            throughout the design process. This includes discovery, research,
            wireframing, prototyping, interaction design &amp; development, and
            user testing.
          </Paragraph>
          <Paragraph>
            I find having a wide range of knowledge &amp; skills allows me to
            work well and communicate effectively in cross-functional teams.
          </Paragraph>
        </section>

        <StyledSection>
          <h2>More…</h2>
          <Paragraph>Some other things I am interested in:</Paragraph>
          <StyledUl>
            <li>
              <Paragraph>Accessibility</Paragraph>
            </li>
            <li>
              <Paragraph>Decentralization</Paragraph>
            </li>
            <li>
              <Paragraph>
                Metal, -core subgenres; hip-hop; soul, "Motown"; electronic
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Video games &#40;currently enjoying Pillars of Eternity&#41;
              </Paragraph>
            </li>
            <li>
              <Paragraph>Anime</Paragraph>
            </li>
            <li>
              <Paragraph>Running; working out</Paragraph>
            </li>
            <li>
              <Paragraph>Gardening; plants</Paragraph>
            </li>
          </StyledUl>
        </StyledSection> */}
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
