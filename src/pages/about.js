import * as React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// styles
// const Container = styled.div`
//   // margin: 1rem auto 0 auto;
//   max-width: 500px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: center;
// `;

const HeadingText = styled.h1`
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Content
        pageMeta={{
          title:
            'About | Adam Ali — Digital Experience Designer, Prototyper, UX Researcher',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of technology, design, and society—specifically focused on digital public spaces, XR, accessibility, and tech for social good',
        }}
      >
        <HeadingText>Hi there!</HeadingText>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo. Arcu odio ut
          sem nulla pharetra diam sit amet. Enim nec dui nunc mattis enim ut.
          Neque sodales ut etiam sit amet nisl purus in mollis. Quisque egestas
          diam in arcu cursus euismod quis. Sed ullamcorper morbi tincidunt
          ornare massa eget. Gravida arcu ac tortor dignissim convallis aenean
          et tortor. A diam sollicitudin tempor id eu nisl. Sed enim ut sem
          viverra aliquet eget sit. Pretium aenean pharetra magna ac placerat
          vestibulum lectus mauris ultrices. Semper eget duis at tellus at urna
          condimentum. Pellentesque adipiscing commodo elit at. Habitasse platea
          dictumst vestibulum rhoncus. Vel pharetra vel turpis nunc. Tincidunt
          dui ut ornare lectus sit.
        </Paragraph>
        <Paragraph>
          At tempor commodo ullamcorper a lacus vestibulum sed arcu. Id semper
          risus in hendrerit gravida. Ante in nibh mauris cursus. Mauris rhoncus
          aenean vel elit scelerisque mauris. Enim facilisis gravida neque
          convallis a cras. Dolor sed viverra ipsum nunc. Duis convallis
          convallis tellus id. In est ante in nibh mauris. Malesuada fames ac
          turpis egestas. Suspendisse in est ante in nibh.
        </Paragraph>
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
