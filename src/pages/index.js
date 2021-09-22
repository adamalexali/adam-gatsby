import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/content';
import Footer from '../components/footer';

//images
import illustrator from '../images/icons-illustrator.svg';
import aftereffects from '../images/icons-aftereffects.svg';
import photoshop from '../images/icons-photoshop.svg';
import indesign from '../images/icons-indesign.svg';
import adobexd from '../images/icons-adobexd.svg';
import figma from '../images/icons-figma.svg';
import sketch from '../images/icons-sketch.svg';
import zeplin from '../images/icons-zeplin.svg';
import blender from '../images/icons-blender.svg';
import c4d from '../images/icons-c4d.svg';

import htmlIcon from '../images/icons-html.svg';
import cssIcon from '../images/icons-css.svg';
import js from '../images/icons-js.svg';
import gitIcon from '../images/icons-git.svg';
import githubIcon from '../images/icons-github.svg';
import reactIcon from '../images/icons-react.svg';
import nodeIcon from '../images/icons-node.svg';
import webflow from '../images/icons-webflow.svg';

const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const StyledDiv = styled.div`
  margin-bottom: 1.25rem;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  // padding-left: 2.563rem;
  padding-left: 1.375rem;
`;

const ItalicSpan = styled.span`
  font-style: italic;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const StyledGrid = styled.div`
  // max-width: 500px;
  // display: grid;
  // margin: 0 auto;
  // grid-template-columns: repeat(5, auto);
  // place-items: center;
  // grid-row-gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// markup
const IndexPage = () => {
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

  return (
    <>
      <Content
        pageMeta={{
          title: '',
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <h1>
            Hello!{' '}
            <span role='img' aria-label='waving hand emoji'>
              👋
            </span>{' '}
            <br />
          </h1>
          <Paragraph>
            I'm{' '}
            <BoldSpan>
              Adam Ali—a human-focused experience designer, developer, and
              researcher
            </BoldSpan>{' '}
            exploring the intersections of people, design, and technology.
            Welcome to my little corner of the internet—a digital garden where I
            share my thoughts and what I'm working on. If you'd like, you can
            also <Link to='/about'>find out more about me</Link>, and what I am
            up to when I'm not working!
          </Paragraph>
          <Paragraph>
            I am particularly interested in user experience design,
            human-machine interaction, digital accessibility, and the
            relationship between tech & ethics. I write about these topics and
            more in{' '}
            <a
              href='https://github.com/adamalexali/adam-obsidian'
              target='_blank'
              rel='noreferrer'
            >
              my second brain
            </a>
            .
          </Paragraph>
          <Paragraph>
            Ultimately, I want to create more{' '}
            <BoldSpan>accessible, inclusive, and open</BoldSpan> digital public
            spaces—in whatever ways I can achieve that! I'm optimistic about the
            future, and want to contribute my part to it.
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
                download my CV
              </a>
            </BoldSpan>
            , check out my{' '}
            <a
              href='https://www.github.com/adamalexali/'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            , or shoot me a message on{' '}
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
            .
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
                  GBC Research & Innovation
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying Digital Experience Design </BoldSpan>{' '}
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
                <BoldSpan>Studying Computer Science</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a href='https://www.edx.org/' target='_blank' rel='noreferrer'>
                  edX
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Freelancing web development</BoldSpan>{' '}
                <ItalicSpan>using</ItalicSpan>{' '}
                <a href='https://webflow.com' target='_blank' rel='noreferrer'>
                  Webflow
                </a>
              </Paragraph>
            </li>
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

        {/* <StyledSection>
          <h2>Process</h2>
          <Paragraph>
            Every project is different—there is never a one-size-fits-all
            solution. It largely depends on the client and their goals. Because
            of this, I've adopted aspects of the Agile mindset into my general
            process, which gives me the flexibility to adapt to specific client
            needs. I respect the{' '}
            <a href='https://agilemanifesto.org/'>Manifesto</a>'s values of{' '}
            collaborating & empathizing with clients, continuously developing
            tangible products that deliver high value, and being flexible in
            response to changes & new insights.
          </Paragraph>
          <div>
            <StyledDivMarginTop>
              <h3>
                <span role='img' aria-label='yellow heart emoji'>
                  💛
                </span>{' '}
                <BoldSpan>Empathize</BoldSpan>
              </h3>
              <StyledUl>
                <li>
                  <Paragraph>
                    Working with the client, learn about their goals, their
                    motivations, and their business.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Continuous interaction and engagement with the client
                    throughout the development cycle.
                  </Paragraph>
                </li>
              </StyledUl>
            </StyledDivMarginTop>
            <StyledDiv>
              <h3>
                <span role='img' aria-label='spiral notepad emoji'>
                  🗒
                </span>{' '}
                <BoldSpan>Contextualize</BoldSpan>
              </h3>
              <StyledUl>
                <li>
                  <Paragraph>
                    Communicating the value of their business.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    High-value content takes priority. This involves gathering
                    insights about the client's clients—their users—to determine
                    their goals and frustrations.
                  </Paragraph>
                </li>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <h3>
                <span role='img' aria-label='hammer and wrench emoji'>
                  🛠
                </span>{' '}
                <BoldSpan>Develop</BoldSpan>
              </h3>
              <StyledUl>
                <li>
                  <Paragraph>
                    Ideate, prototype, and develop the high-value feature for
                    this cycle.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Testing and building based on usability and accessibility
                    heuristics, ensuring access is universal while still meeting
                    client and user needs.
                  </Paragraph>
                </li>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <h3>
                <span role='img' aria-label='rocket emoji'>
                  🚀
                </span>{' '}
                <BoldSpan>Deploy</BoldSpan>
              </h3>
              <StyledUl>
                <li>
                  <Paragraph>
                    Deliver the solution to the client—the high-value working
                    product/system/service.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    This deployment may not be the final iteration, but the
                    client should be able to walk away satisfied after every
                    iteration.
                  </Paragraph>
                </li>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <h3>
                <span role='img' aria-label='evergreen tree emoji'>
                  🌲
                </span>{' '}
                <BoldSpan>Reflect</BoldSpan>
              </h3>
              <StyledUl>
                <li>
                  <Paragraph>
                    Looking at the most recent cycle for areas where efficiency
                    or effectiveness can be improved.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    Recognizing lessons learned from this project that can be
                    applied to future ones.
                  </Paragraph>
                </li>
              </StyledUl>
            </StyledDiv>
          </div>
        </StyledSection> */}
        <StyledSection>
          <StyledDiv>
            <h2>Design…</h2>
            <Paragraph>
              My time at George Brown College provided me with skills and
              expertise in a number of design fields; including graphic design,
              UX design, motion graphics, 3D modelling, and XR & immersive
              design.
            </Paragraph>
            <Paragraph>
              Previously, I've worked as a designer in different capacities;
              ranging from a front-end designer to a dedicated graphic designer.
              Many of the skills I've acquired over the years help me in all my
              jobs, as having a strong understanding of design principles is key
              to creating great digital experiences.
            </Paragraph>
          </StyledDiv>
          <StyledDiv>
            <h3>Specialities</h3>
            <StyledUl>
              <li>
                <Paragraph>
                  <BoldSpan>User experience (UX)</BoldSpan>—I specialize in
                  empathizing with users—their needs, goals, and values—in order
                  to deliver effective, efficient, and engaging digital
                  experiences. My academics and past work have given me
                  knowledge in a number of UX tasks, such as research,
                  interaction design, visual design, information architecture,
                  and front-end development.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <BoldSpan>Prototyping</BoldSpan>—I have a variety of
                  prototyping tools under my belt to make the design process
                  more tangible. I believe people find real value in working
                  software, not just mockups. I like to prototype and iterate
                  the final product as early as I can.
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <div>
            <h3>Tools</h3>
            <StyledGrid>
              <img
                className='icon'
                src={photoshop}
                alt='Photoshop'
                title='Photoshop'
              />
              <img
                className='icon'
                src={illustrator}
                alt='Illustrator'
                title='Illustrator'
              />
              <img
                className='icon'
                src={indesign}
                alt='InDesign'
                title='InDesign'
              />
              <img
                className='icon'
                src={aftereffects}
                alt='After Effects'
                title='After Effects'
              />
              <img className='icon' src={adobexd} alt='XD' title='XD' />
              <img className='icon' src={figma} alt='Figma' title='Figma' />
              <img className='icon' src={sketch} alt='Sketch' title='Sketch' />
              <img className='icon' src={zeplin} alt='Zeplin' title='Zeplin' />
              <img
                className='icon'
                src={blender}
                alt='Blender'
                title='Blender'
              />
              <img
                className='icon'
                src={c4d}
                alt='Cinema 4D'
                title='Cinema 4D'
              />
            </StyledGrid>
          </div>
        </StyledSection>

        <section>
          <StyledDiv>
            <h2>Development…</h2>
            <Paragraph>
              Over the past few years I've worked to understand and cultivate
              skill in full-stack web development to complement my UX & design
              skills. I believe having expertise in these areas gives me a full
              view of the feasibility & viability of digital products, systems,
              and services.
            </Paragraph>
            <Paragraph>
              I've worked as a front-end developer in a contract position for a
              number of different companies, and I'm looking to further explore
              this field in my future employment. I also aim to continue
              learning more tools and technologies within this field,
              particularly working with data and information.
            </Paragraph>
          </StyledDiv>
          <StyledDiv>
            <h3>Specialities</h3>
            <StyledUl>
              <li>
                <Paragraph>
                  <BoldSpan>Front-end web development</BoldSpan>—Coming from a
                  design background, I have exceptional front-end skills. I
                  excel at creating clean, DRY code for beautiful interfaces;
                  with a focus on minimalism, usability, and accessibility.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  <BoldSpan>Web accessibility</BoldSpan>—During my time with GBC
                  Research and Innovation, I was exposed to the wide and often
                  overlooked field of accessibility. I have since focused on
                  learning more about designing more inclusive, accessible, and
                  usable interfaces to ensure that the products, systems, and
                  services I create are able to be used by all.
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
          <StyledDiv>
            <h3>Tools</h3>
            <StyledGrid>
              <img className='icon' src={htmlIcon} alt='HTML' title='HTML' />
              <img className='icon' src={cssIcon} alt='CSS' title='CSS' />
              <img
                className='icon'
                src={js}
                alt='JavaScript'
                title='JavaScript'
              />
              <img className='icon' src={gitIcon} alt='Git' title='Git' />
              <img
                className='icon'
                src={githubIcon}
                alt='Github'
                title='Github'
              />
              <img className='icon' src={reactIcon} alt='React' title='React' />
              <img className='icon' src={nodeIcon} alt='Node' title='Node' />
              {/* <img
                className='icon'
                src={mongodbIcon}
                alt='MongoDB'
                title='MongoDB'
              /> */}
              <img
                className='icon'
                src={webflow}
                alt='Webflow'
                title='Webflow'
              />
            </StyledGrid>
          </StyledDiv>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
