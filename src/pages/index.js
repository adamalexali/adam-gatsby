import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// styles
const StyledH3 = styled.h3`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const StyledDiv = styled.div`
  margin-bottom: 1.25rem;
`;

const StyledDivMarginTop = styled(StyledDiv)`
  margin-top: 1.25rem;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  // emoji x-distance + 22px
  padding-left: 2.563rem;
`;

const ItalicSpan = styled.span`
  font-style: italic;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const Highlighted = styled.span`
  background-color: #fdcc57;
`;

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
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
            exploring the intersections of people, design, and technology. I'm
            particularly interested in user experience design, human-machine
            interaction, digital accessibility, and the relationship between
            tech & ethics in the public sector.
          </Paragraph>
          <Paragraph>
            If you'd like, you can also{' '}
            <Link to='/about'>find out more about me!</Link>
          </Paragraph>
        </section>

        <StyledSection>
          <h2>Currently…</h2>
          <ul>
            <li>
              <Paragraph>
                <BoldSpan>Exploring digital accessibility</BoldSpan>{' '}
                <ItalicSpan>with</ItalicSpan>{' '}
                <a href='https://www.georgebrown.ca/about/office-of-research-innovation'>
                  GBC Research & Innovation
                </a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying Digital Experience Design </BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a href='https://www.georgebrown.ca/'>George Brown College</a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Studying Computer Science</BoldSpan>{' '}
                <ItalicSpan>at</ItalicSpan>{' '}
                <a href='https://www.edx.org/'>edX</a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Freelancing web development</BoldSpan>{' '}
                <ItalicSpan>using</ItalicSpan>{' '}
                <a href='https://webflow.com'>Webflow</a>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Building projects</BoldSpan>{' '}
                <ItalicSpan>using</ItalicSpan>{' '}
                <a href='https://github.com/adamalexali'>Github</a>
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
          <h2>Hiring</h2>
          <Paragraph>
            Considering hiring me? <BoldSpan>Good idea!</BoldSpan> Check out
            these links for my qualifications and work experience:
          </Paragraph>
          <ul>
            <li>
              <Paragraph>
                <Link to='/curriculum-vitae'>Curriculum vitae (CV)</Link>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <a href='https://www.linkedin.com/in/adamalexali/'>LinkedIn</a>
              </Paragraph>
            </li>
          </ul>
        </StyledSection>

        <StyledSection>
          <h2>Process</h2>
          <Paragraph>
            <BoldSpan>
              Find out more about my <Link to='/design'>design</Link> &{' '}
              <Link to='/development'>development</Link> process & experience.
            </BoldSpan>
          </Paragraph>
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
              <StyledH3>
                <span role='img' aria-label='yellow heart emoji'>
                  💛
                </span>{' '}
                <BoldSpan>Empathize</BoldSpan>
              </StyledH3>
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
              <StyledH3>
                <span role='img' aria-label='spiral notepad emoji'>
                  🗒
                </span>{' '}
                <BoldSpan>Contextualize</BoldSpan>
              </StyledH3>
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
              <StyledH3>
                <span role='img' aria-label='hammer and wrench emoji'>
                  🛠
                </span>{' '}
                <BoldSpan>Develop</BoldSpan>
              </StyledH3>
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
              <StyledH3>
                <span role='img' aria-label='rocket emoji'>
                  🚀
                </span>{' '}
                <BoldSpan>Deploy</BoldSpan>
              </StyledH3>
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
              <StyledH3>
                <span role='img' aria-label='evergreen tree emoji'>
                  🌲
                </span>{' '}
                <BoldSpan>Reflect</BoldSpan>
              </StyledH3>
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
        </StyledSection>

        <section>
          <h2>Contact</h2>
          <Paragraph>
            <a href='mailto:adamalexali@gmail.com'>adamalexali@gmail.com</a>
          </Paragraph>
          <Paragraph>
            <BoldSpan>
              <Highlighted>@adamalexali</Highlighted>
            </BoldSpan>{' '}
            on all major social media platforms
          </Paragraph>
          <Paragraph>
            <span role='img' aria-label='hot beverage emoji'>
              ☕️
            </span>{' '}
            <a href='https://www.buymeacoffee.com/adamalexali'>
              Buy me a coffee!
            </a>
          </Paragraph>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default IndexPage;
