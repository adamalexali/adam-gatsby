import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import {
  Paragraph,
  StyledSection,
  StyledNav,
  StyledUl,
  FlexDiv,
  StyledDiv,
} from '../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import ThemeToggle from '../components/themeToggle';
import WorkExperienceTemplate from '../components/workExperience';
import Content from '../components/content';
import Footer from '../components/footer';

export const jobDetails = [
  {
    role: 'UX Researcher',
    company: 'GBC Research & Innovation',
    jobType: 'Contract; part-time',
    dateTime: {
      start: { dateTime: '2021-04', semantic: 'April 2021' },
      end: { dateTime: '2022-01', semantic: 'January 2022' },
    },
    tasks: [
      'Identified accessibility challenges within e-learning platforms via literature review & independent research',
      'Facilitated remote innovation design workshops with stakeholders; organized and presented solutions',
      'Assisted in the drafting of questionnaire & framework for assessing accessibility for e-learning platforms',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'The Ontario Black History Society',
    jobType: 'Freelance; part-time',
    dateTime: {
      start: { dateTime: '2020-12', semantic: 'December 2020' },
      end: { dateTime: '2021-02', semantic: 'February 2021' },
    },
    tasks: [
      'Designed and created digital media materials for a number of the organization’s partners',
      'Architected the layout of digital program book in-line with the organization’s branding and campaign',
      'Collaborated with internal and external stakeholders for resources, asset gathering, copywriting',
    ],
  },
  {
    role: 'UX Developer',
    company: 'GBC Research & Innovation',
    jobType: 'Contract; part-time',
    dateTime: {
      start: { dateTime: '2019-09', semantic: 'September 2019' },
      end: { dateTime: '2020-06', semantic: 'June 2020' },
    },
    tasks: [
      'Explored opportunities for integration of XR technologies within client’s service ecosystem via workshops',
      'Co-designed personas, journeys, & wireframes to gather insights into online/in-store UX',
      'Developed & showcased functional prototype of AR application along with UX solutions to stakeholders',
    ],
    tools: ['Illustrator', 'Figma', 'Aero', 'Unity 3D'],
  },
  {
    role: 'Front-End Developer',
    company: 'LinkMentalHealth',
    jobType: 'Co-op; part-time',
    dateTime: {
      start: { dateTime: '2020-01', semantic: 'January 2020' },
      end: { dateTime: '2020-05', semantic: 'May 2020' },
    },
    tasks: [
      'Optimized UX by restructuring information architecture and employing visual design principles',
      'Refined user flows, created wireframes; wrote web content/copy; assisted in conducting user tests',
      'Contributed to project management; design of front-end website & maintenance of back-end database',
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'MongoDB',
      'NodeJS',
      'Express',
      'Figma',
      'Illustrator',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Blade Creative Branding, Inc.',
    jobType: 'Freelance; part-time',
    dateTime: {
      start: { dateTime: '2019-09', semantic: 'September 2019' },
      end: { dateTime: '2019-12', semantic: 'December 2019' },
    },
    tasks: [
      'Researched & defined client goals to inform project scope and objectives',
      'Designed & implemented an interactive web application using jQuery library and plugins',
      'Collaborated with stakeholders to ensure functionality aligned with client objectives; troubleshot issues',
    ],
  },
];

const Resume = ({ pageContext, location }) => {
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
          title: 'Resume |',
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
          <a
            href={data.allFile.edges[0].node.publicURL}
            target='_blank'
            rel='noreferrer'
          >
            Download a PDF version
          </a>
        </section>
        <StyledSection>
          <FlexDiv>
            <h1>Adam Ali</h1>
            <address className='rightAlign'>
              Keswick, ON L4P 4G3 <br />
              <a
                href='mailto:adamalexali@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='external-link'
              >
                adamalexali@gmail.com
              </a>{' '}
              <br />
              <p>+1 (289) 926-0221</p>
              <a
                href='https://adamalexali.com'
                target='_blank'
                rel='noreferrer'
                className='external-link'
              >
                adamalexali.com
              </a>{' '}
              |{' '}
              <a
                href='https://www.linkedin.com/in/adamalexali/'
                target='_blank'
                rel='noreferrer'
                className='external-link'
              >
                LinkedIn
              </a>
            </address>
          </FlexDiv>
          <p>
            Adam is a passionate individual with an interdisciplinary foundation
            in digital experience design. With over three years of experience,
            he is dedicated to delivering high-value solutions that support user
            and client goals.
          </p>
        </StyledSection>
        <StyledSection>
          <h2 className='underlinedHeader'>Work Experience</h2>
          <WorkExperienceTemplate jobDetails={jobDetails} />
        </StyledSection>
        <StyledSection>
          <h2 className='underlinedHeader'>Education</h2>
          <div>
            <FlexDiv>
              <div>
                <h3>Honours Bachelor of Digital Experience Design</h3>
                <h4>George Brown College</h4>
              </div>
              <div className='rightAlign'>
                <div>
                  <h5>
                    <time dateTime='2020-05'>May 2020</time>&ndash;
                    <time dateTime='2022-04'>current (exp. April 2022)</time>
                  </h5>
                </div>
                <h5>Student; full-time</h5>
              </div>
            </FlexDiv>
            <StyledUl>
              <li>
                Previously received Advanced Diploma in Interaction Design
                (2017&ndash;2020) as part of Bridging Program
              </li>
              <li>3.8/4.0 GPA—Dean's Honour List</li>
            </StyledUl>
          </div>
        </StyledSection>
        <section>
          <h2 className='underlinedHeader'>Skills</h2>
          <StyledDiv>
            <h3>Technical</h3>
            <ul className='skillsList'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>WordPress</li>
              <li>MS Office</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>XD</li>
              <li>After Effects</li>
              <li>Premiere</li>
              <li>Figma</li>
              <li>Sketch</li>
              <li>WCAG</li>
              <li>SEO</li>
            </ul>
          </StyledDiv>
          <div>
            <h3>Personal</h3>
            <ul className='skillsList'>
              <li>Communication</li>
              <li>Attention-to-detail</li>
              <li>Time management</li>
              <li>Organization</li>
              <li>Problem solving</li>
              <li>Research</li>
              <li>Analysis</li>
              <li>Teamwork</li>
              <li>Cooperation</li>
              <li>Discipline</li>
              <li>Adaptability</li>
              <li>Empathy</li>
              <li>Passion</li>
              <li>Human-centred</li>
            </ul>
          </div>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default Resume;
