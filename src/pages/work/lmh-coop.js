import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import {
  Paragraph,
  StyledSection,
  StyledNav,
  StyledUl,
} from '../../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import ThemeToggle from '../../components/themeToggle';
import Content from '../../components/content';
import Footer from '../../components/footer';
import FeaturedProjectTemplate from '../../components/featureProject';
import { jobDetails } from '../resume';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const LMHCoop = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const thePath = location.pathname;
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  const customCrumbLabel = getLastItem(thePath).toLowerCase().replace('/', ' ');

  const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
  `;

  const FlexDivSingle = styled(FlexDiv)`
    justify-content: center;
  `;

  return (
    <>
      <Content
        pageMeta={{
          title: 'Front-End Co-op Placement |',
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
          <h1>Front-End Co-op Placement</h1>
          <FeaturedProjectTemplate jobDetails={jobDetails[3]} />
        </section>
        <StyledSection>
          <h2>Overview</h2>
          <Paragraph>
            During my last year in the Interaction design program at{' '}
            <abbr title='George Brown College'>GBC</abbr>, I had the opportunity
            to work with a Toronto-based award-winning startup, LinkMentalHealth
            as a front-end developer and <abbr title='user experience'>UX</abbr>{' '}
            designer in a co-op placement.
          </Paragraph>
          <Paragraph>
            LinkMentalHealth is a platform that connects employers, employees,
            and students with personalized mental health services & therapies.
            Its aim is to provide a more streamlined user experience when
            seeking help for mental health issues. I came on as a front-end
            developer, but through the course of my placement there, my tasks
            evolved to include full-stack development, interface design as well
            as user experience research.
          </Paragraph>
        </StyledSection>
        <FlexDiv>
          <StaticImage
            src='../../images/projectImages/lmh/calendar.png'
            alt='calendar illustration'
            placeholder='blurred'
            // layout='fixed'
            width={250}
          />
          <StaticImage
            src='../../images/projectImages/lmh/savings.png'
            alt='savings illustration'
            placeholder='blurred'
            // layout='fixed'
            width={250}
          />
          <StaticImage
            src='../../images/projectImages/lmh/people-search.png'
            alt='search illustration'
            placeholder='blurred'
            // layout='fixed'
            width={250}
          />
        </FlexDiv>
        <StyledSection>
          <h2>Problem &amp; Challenge</h2>
          <Paragraph>
            The organization was in the midst of a refresh in terms of their
            website—as such I was brought on to aid the design and development
            team in navigating this transition. This project was focused on how
            we can make a platform that connects these different user groups
            with personalized mental health viable, and where the pain points
            and opportunities would be in such a system.
          </Paragraph>
          <Paragraph>
            There was understandable a lot of legacy code that needed to be
            parsed and either preserved or discarded. Challenges we faced
            included optimizing code, implementing a distinct and consistent
            visual style, and improving the information architecture of the
            site.
          </Paragraph>
        </StyledSection>
        <StyledSection>
          <h2>Solution</h2>
          <Paragraph>
            The full-stack development workflow consisted of building websites
            per high-fidelity wireframes I was given by the design team; using a
            combination of <abbr title='HyperText Markup Language'>HTML</abbr>,{' '}
            <abbr title='Cascading Style Sheets'>CSS</abbr>,{' '}
            <abbr title='JavaScript'>JS</abbr> and the Bootstrap library. I
            would also work with back-end tools like MongoDB and NodeJS to
            manage and update LinkMentalHealth's database of users and
            therapists.
          </Paragraph>
          <Paragraph>
            In terms of design, after I had shown some interest in giving input
            to the design team due to my background in UX and interface design,
            I was given the opportunity to collaborate with them to develop a
            visual style and design some of the web pages. I created personas
            and user journeys so I could better communicate with the team the
            best practices for user experience design. I was also in charge of
            making sure the branding guidelines were consistent and maintained
            throughout the entire website.
          </Paragraph>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/lmh/lmh_persona2.png'
              alt='persona'
              placeholder='blurred'
            />
          </FlexDivSingle>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/lmh/lmh_userjourney.png'
              alt='user journey'
              placeholder='blurred'
            />
          </FlexDivSingle>
          <Paragraph>
            Finally, towards the end of my placement, I was tasked with working
            with another member of the team to begin UX research—I started with
            evaluating and understanding the system and user flows and moved
            towards conducting A/B testing using Google Optimize on different
            functions of the website in order to boost conversions in those
            areas. Unfortunately, the placement had concluded before the test
            could be completed, but I was still able to effectively help the
            team using the skills I've learned regarding user experience.
          </Paragraph>
          <FlexDiv>
            <StaticImage
              src='../../images/projectImages/lmh/lmh_sketches.png'
              alt='interface sketches (1)'
              placeholder='blurred'
              // layout='fixed'
              width={250}
            />
            <StaticImage
              src='../../images/projectImages/lmh/lmh_sketches2.png'
              alt='interface sketches (2)'
              placeholder='blurred'
              // layout='fixed'
              width={250}
            />
            <StaticImage
              src='../../images/projectImages/lmh/lmh_sketches3.png'
              alt='interface sketches (3)'
              placeholder='blurred'
              // layout='fixed'
              width={250}
            />
          </FlexDiv>
          <FlexDiv>
            <StaticImage
              src='../../images/projectImages/lmh/lmh_wireframes1.png'
              alt='interface wireframes (1)'
              placeholder='blurred'
              // layout='fixed'
              height={250}
            />
            <StaticImage
              src='../../images/projectImages/lmh/lmh_therapistProfile.png'
              alt='interface wireframes (2)'
              placeholder='blurred'
              // layout='fixed'
              height={250}
            />
          </FlexDiv>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/lmh/lmh_employersPage.png'
              alt='sample interface page'
              placeholder='blurred'
              // layout='fixed'
              // height={250}
            />
          </FlexDivSingle>
        </StyledSection>
        <StyledSection>
          <h2>Reflection</h2>
          <Paragraph>
            I found my strengths to be in areas I was already confident
            in—namely, front-end development, design, and UX. This field
            placement gave me a chance to practice these skills and improve on
            them through repetition and feedback from the rest of the team.
          </Paragraph>
          <Paragraph>
            In terms of front-end, I can quickly build pages according to guides
            and wireframes from the design team. I find this was the task I was
            doing the most, and I got very good at translating designs to code.
            I developed my ability to build clean, DRY &#40;don't repeat
            yourself; i.e. simple&#41; code for responsive pages in a short
            amount of time.
          </Paragraph>
          <Paragraph>
            With a UX background, I was capable of understanding users through
            UX research methods, as well as designing strong interfaces that
            promote user conversions, support user goals, and are visually
            appealing. I have a good eye for consistency, as well as
            understanding where improvements can be made. Most importantly
            though, I am able to effectively communicate these ideas to the rest
            of the team and bring everyone on board. My background in these
            areas made me a great intermediary between the design and
            development teams.
          </Paragraph>
          <Paragraph>
            In terms of weakness, my biggest one was when I had to do any sort
            of back-end work—the area I was most unfamiliar and unconfident in.
            I was able to work around my problems with the help of my peers and
            the development lead &#40;who was teaching me a lot as well
            throughout the entire placement&#41;. Having never worked with
            databases before, getting started with it and running the server
            took some time to understand and integrate that process into my
            workflow. I've since become more familiar with back-end development,
            and continue to learn and grow.
          </Paragraph>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/lmh/logo2.png'
              alt='organization logo'
              placeholder='blurred'
              // layout='fixed'
              height={150}
            />
          </FlexDivSingle>
        </StyledSection>
      </Content>
      <Footer />
    </>
  );
};

export default LMHCoop;
