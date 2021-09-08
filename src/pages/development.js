import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

//images
import htmlIcon from '../images/icons-html.svg';
import cssIcon from '../images/icons-css.svg';
import js from '../images/icons-js.svg';
import gitIcon from '../images/icons-git.svg';
import githubIcon from '../images/icons-github.svg';
import reactIcon from '../images/icons-react.svg';
import nodeIcon from '../images/icons-node.svg';
import webflow from '../images/icons-webflow.svg';

// styles

const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
`;

const StyledDiv = styled.div`
  margin-bottom: 1.25rem;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  // 22px
  padding-left: 1.375rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const DevelopmentPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: 'Development |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <h1>Development</h1>
          <Paragraph>
            Over the past few years I've worked to understand and cultivate
            skill in full-stack web development to complement my UX & design
            skills. I believe having expertise in these areas gives me a full
            view of the feasibility & viability of digital products, systems,
            and services.
          </Paragraph>
          <Paragraph>
            <Link to='/curriculum-vitae#experience'>
              I've worked as a front-end developer
            </Link>{' '}
            in a contract position for a number of different companies, and I'm
            looking to further explore this field in my future employment. I
            also aim to continue learning more tools and technologies within
            this field, particularly working with data and information.
          </Paragraph>
        </section>
        <StyledSection>
          <StyledDiv>
            <h2>Specialities</h2>
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
                  <BoldSpan>Web accessibility</BoldSpan>—During my time with{' '}
                  <Link to='/curriculum-vitae#experience'>
                    GBC Research and Innovation
                  </Link>
                  , I was exposed to the wide and often overlooked field of
                  accessibility. I have since focused on learning more about
                  designing more inclusive, accessible, and usable interfaces to
                  ensure that the products, systems, and services I create are
                  able to be used by all.
                </Paragraph>
              </li>
            </StyledUl>
          </StyledDiv>
        </StyledSection>
        <section>
          <StyledDiv>
            <h2>Tools</h2>
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

export default DevelopmentPage;
