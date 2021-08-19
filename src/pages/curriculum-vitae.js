import * as React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const h1 = styled.h1`
  margin: 1rem 0;
`;

const h2 = styled.h2`
  margin: 1rem 0;
`;

const StyledH3 = styled.h3`
  margin-bottom: 0.5rem;
`;

const DateSpan = styled.span`
  color: rgba(31, 31, 31, 0.8);
  font-style: italic;
  font-size: 0.75rem;
  font-weight: 400;
`;

const StyledH5 = styled.h5`
  margin-bottom: 1rem;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
`;

const StyledDiv = styled.div`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const ItalicSpan = styled.span`
  font-style: italic;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const StyledLi = styled.li`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: auto 1fr;
`;

const CurriculumVitae = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: 'CV |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <h1>Curriculum Vitae (CV)</h1>
          <h1>Adam Ali</h1>
          <h2>Experience designer, developer, & researcher</h2>
          <ul>
            <StyledLi>
              {' '}
              <Paragraph>
                <span role='img' aria-label='round pushpin emoji'>
                  📍
                </span>{' '}
                Toronto, ON
              </Paragraph>
            </StyledLi>
            <StyledLi>
              <Paragraph>
                <span role='img' aria-label='telephone receiver emoji'>
                  📞
                </span>{' '}
                (289) 926-0221
              </Paragraph>
            </StyledLi>
            <StyledLi>
              <Paragraph>
                <span role='img' aria-label='envelope emoji'>
                  ✉️
                </span>{' '}
                <a href='mailto:adamalexali@gmail.com'>adamalexali@gmail.com</a>{' '}
              </Paragraph>
            </StyledLi>
          </ul>
        </section>

        <StyledSection>
          <h2>About</h2>
          <Paragraph>
            Adam Ali is a human-centred experience designer, developer, and
            researcher exploring the intersections of people, design, and
            technology. Adam has a background in UX & interaction design and has
            since become a full-stack developer for web applications.
          </Paragraph>
          <Paragraph>
            Throughout his professional career, Adam has honed his skills in
            various disciplines within the field of digital experience
            design—including UX, interface design, content writing,
            human-machine interaction, usability & accessibility, XR & immersive
            environments, and data visualization. In addition to this, Adam has
            a passion and skill for full-stack web development with knowledge of
            popular frameworks and technologies; including React, Node.js,
            Express, and MongoDB.
          </Paragraph>
          <Paragraph>
            With the recognition of the embedded nature of technology within
            society and our lives, Adam brings unique insights through his
            passion and knowledge of digital rights, accessibility, the digital
            public sphere, and "technology for good". Leveraging expertise
            gained from his professional and academic career as well as
            independent research, Adam works to create more accessible,
            inclusive, and open digital experiences.
          </Paragraph>
        </StyledSection>

        <StyledSection>
          <h2>Education</h2>
          <StyledDiv>
            <StyledH3>
              George Brown College <DateSpan>(2020–current)</DateSpan>
            </StyledH3>
            <Paragraph>Honours Bachelor of Digital Experience Design</Paragraph>
          </StyledDiv>
          <StyledDiv>
            <StyledH3>
              George Brown College <DateSpan>(2017–2020)</DateSpan>
            </StyledH3>
            <Paragraph>
              Advanced Diploma in Interaction Design & Development
            </Paragraph>
          </StyledDiv>
          <div>
            <StyledH3>
              McMaster University <DateSpan>(2014–2017)</DateSpan>
            </StyledH3>
            <Paragraph>Social Sciences program</Paragraph>
          </div>
        </StyledSection>

        <StyledSection>
          <h2>Experience</h2>
          <StyledDiv>
            <StyledH3>
              Web Developer <DateSpan>(freelance; MAY 2021–current)</DateSpan>
            </StyledH3>
            <StyledH5>Self-employed</StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Understanding the needs of clients' business and their
                  customers to determine content & value
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Designing and developing stunning websites using Webflow;
                  testing and deploying
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <StyledDiv>
            <StyledH3>
              UX Researcher <DateSpan>(contract; APR 2021–current)</DateSpan>
            </StyledH3>
            <StyledH5>
              <a href='https://www.gbcresearch.ca/'>
                GBC Research & Innovation
              </a>
            </StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Identify challenges and opportunities within existing virtual
                  service & e-learning platforms with regards to users with
                  disabilities
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Engaged with stakeholder groups to generate insights
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Development of a framework for assessing accessibility for
                  e-learning platforms
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <StyledDiv>
            <StyledH3>
              Graphic Designer{' '}
              <DateSpan>(contract; DEC 2020–FEB 2021)</DateSpan>
            </StyledH3>
            <StyledH5>
              <a href='https://blackhistorysociety.ca'>
                Ontario Black History Society
              </a>
            </StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Leveraging graphic design skills to create digital ads for
                  client sponsors as part of an e-program companion book
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Gathered assets together with the client to structure the
                  information architecture of the book
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Created an aesthetic visual identity linking the client with
                  the e-program event
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <StyledDiv>
            <StyledH3>
              Product Designer{' '}
              <DateSpan>(contract; SEP 2019–MAY 2020)</DateSpan>
            </StyledH3>
            <StyledH5>
              <a href='https://www.gbcresearch.ca/'>
                GBC Research & Innovation
              </a>
            </StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Engaged with stakeholder groups to identify opportunities for
                  the implementation of emerging XR technologies within their
                  existing ecosystem
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Created personas, user journeys, wireframes, and mockups to
                  gather insights into the user experience of AR integration
                  in-store and on mobile devices
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Developed a functional prototype of the AR application using
                  Unity 3D
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <StyledDiv>
            <StyledH3>
              Front-End Developer{' '}
              <DateSpan>(co-op; JAN 2020–APR 2020)</DateSpan>
            </StyledH3>
            <StyledH5>
              <a href='https://www.linkmentalhealth.com/'>LinkMentalHealth</a>
            </StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Integrated user experience best practices by understanding
                  their clients through stakeholder interviews, team workshops
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Refined user flows, created wireframes, and conducted user
                  tests
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Collaborated with the visual designer and the back-end
                  developers to develop a consistent visual identity and build
                  the responsive site
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <div>
            <StyledH3>
              Front-End Developer{' '}
              <DateSpan>(contract; SEP 2019–NOV 2019)</DateSpan>
            </StyledH3>
            <StyledH5>
              <a href='https://bladecreativebranding.com/'>
                Blade Creative Branding, Inc.
              </a>
            </StyledH5>
            <StyledUl>
              <li>
                <Paragraph>
                  Researched & defined client goals and conducted a competitive
                  analysis to generate insights
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Developed an interactive web feature, implemented into the
                  client's WordPress site
                </Paragraph>
              </li>
            </StyledUl>
          </div>
        </StyledSection>

        <StyledSection>
          <h2>Tools & technologies</h2>
          <StyledDiv>
            <StyledH3>Full-Stack Web Development</StyledH3>
            <Paragraph>
              HTML, CSS, JavaScript, Bootstrap, React, Node, Gatsby,
              Styled-Components, Git, Github, Webflow, Netlify, Express, MongoDB
            </Paragraph>
          </StyledDiv>
          <div>
            <StyledH3>Design</StyledH3>
            <Paragraph>
              Photoshop, Illustrator, XD, After Effects, InDesign, Aero, Figma,
              Sketch, InVision, Procreate, Blender, Cinema 4D
            </Paragraph>
          </div>
        </StyledSection>

        <StyledSection>
          <h2>Awards & recognition</h2>
          <StyledUl>
            <li>
              <Paragraph>
                Student Association Arts & Design Third and Fourth Year Student
                Scholarship <DateSpan>(2021)</DateSpan>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                2020-21 YES! School of Design Virtual Year End Show{' '}
                <DateSpan>(2021)</DateSpan>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                2019-20 NEXT School of Design Year End Show{' '}
                <DateSpan>(2020)</DateSpan>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                GBC Dean's Honour List <DateSpan>(2017–2021)</DateSpan>
              </Paragraph>
            </li>
          </StyledUl>
        </StyledSection>
      </Content>
      <Footer />
    </>
  );
};

export default CurriculumVitae;
