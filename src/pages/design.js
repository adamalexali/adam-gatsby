import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
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

const StyledUl = styled.ul`
  list-style-type: disc;
  // 22px
  padding-left: 1.375rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const DesignPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title: 'Design |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <h1>Design</h1>
          <Paragraph>
            My time at George Brown College provided me with skills and
            expertise in a number of design fields; including graphic design, UX
            design, motion graphics, 3D modelling, and XR & immersive design.
          </Paragraph>
          <Paragraph>
            Previously,{' '}
            <Link to='/curriculum-vitae#experience'>
              I've worked as a designer
            </Link>{' '}
            in different capacities; ranging from a front-end designer to a
            dedicated graphic designer. Many of the skills I've acquired over
            the years help me in all my jobs, as having a strong understanding
            of design principles is key to creating great digital experiences.
          </Paragraph>
        </section>
        <StyledSection>
          <StyledDiv>
            <h2>Specialities</h2>
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
        </StyledSection>
        <section>
          <StyledDiv>
            <h2>Tools</h2>
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
          </StyledDiv>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default DesignPage;
