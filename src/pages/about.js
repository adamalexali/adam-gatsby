import * as React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// styles

const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  // emoji x-distance + 22px
  padding-left: 2.813rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ItalicSpan = styled.span`
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: 'About |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <h1>About me</h1>
          <Paragraph>
            It's always nice to know a little bit more about each other—I'm
            grateful you are taking the time to find out more & I would love to
            hear from you.
          </Paragraph>
          {/* <Paragraph>
          Consider reaching out using the form below, and we can connect, chat,
          & collaborate!
        </Paragraph> */}
        </section>

        <StyledSection>
          <h2>My background</h2>
          <Paragraph>
            <BoldSpan>I'm Adam!</BoldSpan> I am a Canadian of Caribbean descent
            currently based in and around the Greater Toronto Area.
          </Paragraph>
          <Paragraph>
            I started my post-secondary career at McMaster University, but ended
            up taking some time off to work before pivoting to interaction
            design & development at George Brown College, where I earned an
            advanced diploma. From there, I bridged into my current program,
            where I hope to receive my bachelor's in digital experience design
            within a few months!
          </Paragraph>
          <Paragraph>
            Throughout my time at GBC, I've developed skills across a variety of
            disciplines, including{' '}
            <BoldSpan>
              UX research & design, interface design, content writing,
              human-machine interaction, usability, accessibility, XR &
              immersive environments, and data visualization
            </BoldSpan>
            . I aim to continue studying and developing skills in these areas
            beyond my academic career; as these are all fields of increasing
            importance in our digital society.
          </Paragraph>
          <Paragraph>
            It was during my time at the college that I also became interested
            in not only the design aspect but also the development one—I wanted
            to learn how to actually build the products and services I was
            designing for! Over the past few years, I've been learning{' '}
            <BoldSpan>full-stack web development</BoldSpan> on my own time, and
            have recently taken up learning computer science more formally as I
            get more fascinated by AI & machine learning and their impact in the
            digital space. My goal is to have a diverse skillset that allows me
            to work effectively in cross-functional teams. Ultimately, I want to
            create a more <BoldSpan>accessible, inclusive, and open</BoldSpan>{' '}
            digital public space —in whatever ways I can achieve that!
          </Paragraph>
        </StyledSection>

        <StyledSection>
          <h2>
            <span role='img' aria-label='books emoji'>
              📚
            </span>{' '}
            Currently learning...
          </h2>
          <StyledUl>
            <li>
              <Paragraph>MERN stack</Paragraph>
            </li>
            <li>
              <Paragraph>SQL</Paragraph>
            </li>
            <li>
              <Paragraph>web accessibility</Paragraph>
            </li>
            <li>
              <Paragraph>
                creative coding with <a href='https://p5js.org/'>p5.js</a>
              </Paragraph>
            </li>
          </StyledUl>
        </StyledSection>

        <StyledSection>
          <h2>
            <span role='img' aria-label='telescope emoji'>
              🔭
            </span>{' '}
            I'm looking to...
          </h2>
          <StyledUl>
            <li>
              <Paragraph>grow my computer science skills</Paragraph>
            </li>
            <li>
              <Paragraph>create more projects working with big data</Paragraph>
            </li>
            <li>
              <Paragraph>
                get more involved in the design & development of digital
                products, systems, & services for social good
              </Paragraph>
            </li>
          </StyledUl>
        </StyledSection>

        <StyledSection>
          <h2>
            <span role='img' aria-label='speech balloon emoji'>
              💬
            </span>{' '}
            Ask me about...
          </h2>
          <StyledUl>
            <li>
              <Paragraph>UX design</Paragraph>
            </li>
            <li>
              <Paragraph>front-end development</Paragraph>
            </li>
            <li>
              <Paragraph>new & emerging technology</Paragraph>
            </li>
            <li>
              <Paragraph>media studies</Paragraph>
            </li>
            <li>
              <Paragraph>digital rights & ethics</Paragraph>
            </li>
          </StyledUl>
        </StyledSection>

        <section>
          <h2>
            <span role='img' aria-label='robot face emoji'>
              🤖
            </span>{' '}
            Engaging with...
          </h2>
          <StyledUl>
            <li>
              <Paragraph>
                <a href='https://www.goodreads.com/book/show/36692414-a-new-city-o-s?from_search=true&from_srp=true&qid=sew0RzKabH&rank=1'>
                  <ItalicSpan>A New City O/S</ItalicSpan>
                </a>{' '}
                by Stephen Goldsmith & Neil Kleiman
              </Paragraph>
            </li>
          </StyledUl>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
