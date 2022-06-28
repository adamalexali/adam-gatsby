import * as React from 'react';
import { Link } from 'gatsby';
import {
  Paragraph,
  StyledSection,
  StyledNav,
} from '../../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import ThemeToggle from '../../components/themeToggle';
import Content from '../../components/content';
import Footer from '../../components/footer';
import FeaturedProjectTemplate from '../../components/featureProject';
import { jobDetails } from '../resume';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import unityUIGif from '../../images/projectImages/ar-measure/unityUI.gif';
import aeroGif from '../../images/projectImages/ar-measure/aero-demo.gif';

const MeasureAR = ({ pageContext, location }) => {
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
    padding: 1rem;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
  `;

  const GridDiv = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    justify-content: center;
    padding: 1rem;

    @media only screen and (max-width: 700px) {
      grid-auto-flow: row;
      justify-items: center;
    }
  `;

  const FlexDivSingle = styled(FlexDiv)`
    justify-content: center;
  `;

  return (
    <>
      <Content
        pageMeta={{
          title: 'Augmented Reality UX Research Project |',
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
          <h1>Augmented Reality UX Research Project</h1>
          <FeaturedProjectTemplate jobDetails={jobDetails[2]} />
        </section>
        <StyledSection>
          <h2>Overview</h2>
          <Paragraph>
            A small team of designers and myself worked with{' '}
            <abbr title='George Brown College'>GBC</abbr> Research &amp;
            Innovation to develop a proof of concept for an augmented reality
            measuring app with a client organization. This project took us from
            conception, research, design, development, and finally, presenting
            our solutions to stakeholders.
          </Paragraph>
          <Paragraph>
            The client was interested in expanding their service delivery to
            include emerging technologies and partnered with the college to
            achieve this. I along with three other student researchers were
            tasked with research and <abbr title='user experience'>UX</abbr>{' '}
            design for the service. My role later evolved to include interface
            development for the Unity application we built as the final
            prototype. Along the way, we collaborated with the client and their
            internal UX team through innovation workshops and presentations
            detailing our progress and design solutions.
          </Paragraph>
        </StyledSection>
        <FlexDivSingle>
          <figure style={{ textAlign: 'center' }}>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/XuvMfPW_vQ0'
              title='YouTube video player—AR Measure Demo by Adam Ali'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <figcaption>
              Demo video.{' '}
              <a
                href='https://youtu.be/XuvMfPW_vQ0'
                target='_blank'
                rel='noreferrer'
              >
                Watch it on Youtube
              </a>{' '}
              if you are having trouble viewing it here.
            </figcaption>
          </figure>
        </FlexDivSingle>
        <StyledSection>
          <h2>Problem &amp; Challenge</h2>
          <Paragraph>
            This research project was very much about exploring how we might
            leverage <abbr title='extended reality'>XR</abbr> technology to
            create exciting, experimental, and effortless user experiences
            within the client's service ecosystem. The client came to us with a
            vague understanding of the technology and how it might be used—so we
            had a large scope to start, and narrowed it down through further
            research and workshops with stakeholders. That being said, we had to
            follow specific brand guidelines and the organizational values of
            the partner client.
          </Paragraph>
          <Paragraph>
            The challenge was without a doubt translating the knowledge we
            gained from our academics into the context of augmented reality.
            Much of our course work focused on the user experience of the
            screen—the interactions users have with a 2D interface. For us,
            working within the virtual world was a much more difficult
            environment, and it challenged us to uncover new and better ways for
            user interaction.
          </Paragraph>
        </StyledSection>
        <FlexDivSingle>
          <StaticImage
            src='../../images/projectImages/ar-measure/tri-vis.png'
            alt='service ecosystem visualization'
            placeholder='blurred'
          />
        </FlexDivSingle>
        <StyledSection>
          <h2>Solution</h2>
          <Paragraph>
            This project spanned two semesters. In the first semester, we worked
            closely with the client's UX team to design an app that would allow
            users to measure their space, and then visualize products such as
            flooring through augmented reality. This phase was really all about
            information gathering—who the users were, what were their needs,
            what functions were necessary for the app, and how we might leverage
            augmented reality throughout all these processes.
          </Paragraph>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/ar-measure/journeymap.png'
              alt='user journey map'
              placeholder='blurred'
            />
          </FlexDivSingle>
          <GridDiv>
            <StaticImage
              src='../../images/projectImages/ar-measure/100-questions.png'
              alt='stickies on a whiteboard'
              placeholder='blurred'
              // layout='fixed'
              // height={250}
            />
            <StaticImage
              src='../../images/projectImages/ar-measure/flow1.png'
              alt='brainstorming the user flow'
              placeholder='blurred'
              // layout='fixed'
              // height={250}
            />
            <StaticImage
              src='../../images/projectImages/ar-measure/flow2.png'
              alt='building user flow through screen mockups'
              placeholder='blurred'
              // layout='fixed'
              // height={250}
            />
          </GridDiv>
          <FlexDivSingle>
            <StaticImage
              src='../../images/projectImages/ar-measure/user-flow.png'
              alt='service ecosystem visualization'
              placeholder='blurred'
            />
          </FlexDivSingle>
          <Paragraph>
            The second phase focused on translating our design solutions to a
            functional prototype. We added a developer to the team and began
            building the experience in Unity. Some challenges we faced included
            getting accurate measurements and overlaying materials.
          </Paragraph>
          <Paragraph>
            My role in this project was primarily research-focused at the start.
            I conducted UX research and competitive analyses to understand the
            context in which this app might exist and the ways in which{' '}
            <abbr title='augmented reality'>AR</abbr> is best used for users of
            different skill levels. I communicated this research with the design
            team, as well as with the client—presenting progress, solutions, and
            facilitating workshops with them to co-design the app. I also
            assisted in building the prototype using Unity Engine, working with
            Unity User Interface to develop the interface with regard to
            wireframes and user journeys we created in the research phase.
          </Paragraph>
          <Paragraph>
            Towards the end, COVID-19 affected how much progress we could make,
            but the team managed to fulfill the design requirements and present
            a working prototype to the client stakeholders.
          </Paragraph>
          <GridDiv>
            <StaticImage
              src='../../images/projectImages/ar-measure/crosshair.png'
              alt='crosshair design for creating perimeters'
              placeholder='blurred'
              // layout='fixed'
              height={300}
            />
            <img src={aeroGif} alt='Adobe Aero demo' height={300} />
            <img src={unityUIGif} alt='Unity UI' height={300} />
          </GridDiv>
        </StyledSection>
        <StyledSection>
          <h2>Reflection</h2>
          <Paragraph>
            This project really pushed the boundaries of what I thought I was
            capable of as a designer and developer. Working with AR technology
            was definitely challenging, but it was also such an incredible
            learning experience. Getting a chance to work on prototypes for this
            technology had allowed me hands-on experience with seeing the ways
            augmented and virtual reality might shape the future of the digital
            experience.
          </Paragraph>
          <Paragraph>
            My strengths on this project were my communication skills—with the
            team, as well as with the client organization. I took initiative to
            step up and take an active role in presenting and justifying our
            design solutions to stakeholders. For example, we had a chance to
            showcase our prototype to the client's in-house design team—a large,
            interdisciplinary team full of experienced designers and developers.
            I took the lead in this presentation, walking through the app as
            well as answering questions that came up.
          </Paragraph>
          <Paragraph>
            Communication within our team proved just as important. Working with
            other designers is never going to be easy, but leveraging the
            strengths of all the team members and working towards a positive,
            encouraging work environment went a long way. I am happy to say that
            I thoroughly enjoyed working with my fellow designers on the team.
          </Paragraph>
          <Paragraph>
            The weaknesses that arose from this project, I believe, were
            over-ambition. We wanted the augmented reality experience to be so
            much more than a measuring tool—our early concepts included ideation
            of integrating the app within their store/in-person environment;
            including integration with their suite of products and an
            immersive/augmented "maker-space". It can be difficult to narrow
            your scope. Taking into account feasibility, time, budget, and other
            constraints, all we can do is our best to deliver to our clients
            with the resources we have available.
          </Paragraph>
        </StyledSection>
        <section style={{ textAlign: 'center' }}>
          <h6>
            Next project—
            <Link to='/work/lmh-coop'>Front-End Co-op Placement</Link> &rarr;
          </h6>
        </section> */}
      </Content>
      <Footer />
    </>
  );
};

export default MeasureAR;
