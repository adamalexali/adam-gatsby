import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../components/content';
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
  padding-left: 1.375rem;
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
      <Content
        pageMeta={{
          title: 'About |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <Paragraph>
            <Link to='/'>/index</Link>
          </Paragraph>
        </section>

        <StyledSection>
          <h1>About me</h1>
          <Paragraph>
            It's always nice to know a little bit more about each other—I'm
            grateful you are taking the time to find out more & I would love to
            hear from you!
          </Paragraph>
          <Paragraph>
            Below are a few of the things I've been engaging with lately.
          </Paragraph>
          {/* <Paragraph>
          Consider reaching out using the form below, and we can connect, chat,
          & collaborate!
        </Paragraph> */}
        </StyledSection>

        <StyledSection>
          <h2>Reading…</h2>
          <Paragraph>
            I love starting my day reading—I try to do at least 30 mins and
            contribute to my{' '}
            <a
              href='https://github.com/adamalexali/adam-obsidian'
              target='_blank'
              rel='noreferrer'
            >
              second brain
            </a>{' '}
            everyday. I like to have a healthy mix of fiction and
            non-fiction—let me know if you have a recommendation! Some of the
            things I'm reading or have read recently:
          </Paragraph>
          <StyledUl>
            <li>
              <Paragraph>
                <BoldSpan>Weapons of Math Destruction</BoldSpan>—Cathy O'Neil
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Wherever You Go, There You Are</BoldSpan>—Jon
                Kabat-Zinn
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Your Money or Your Life</BoldSpan>—Vicki Robin
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>A New City O/S</BoldSpan>—Stephen Goldsmith & Neil
                Kleiman
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Dune</BoldSpan>—Frank Herbert
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>Naruto</BoldSpan>—Masashi Kishimoto
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <BoldSpan>One Piece</BoldSpan>—Eiichiro Oda
              </Paragraph>
            </li>
          </StyledUl>
        </StyledSection>

        <StyledSection>
          <h2>Writing…</h2>
          <Paragraph>
            Recently, I've wanted to get more into writing more formally. I am
            working on a few articles currently, and I hope to continue writing
            in my digital garden. Stay tuned!
          </Paragraph>
        </StyledSection>

        <StyledSection>
          <h2>Listening…</h2>
          <Paragraph>
            Many people are surprised in my taste in music. I actually really
            like a lot of diverse types of sound—but my favourite has to be
            metal (I won't get pedantic about the subgenres). Nothing gets me
            into a flow state like listening to Intervals, Erra, Veil of Maya,
            or (more recently) Spiritbox.
          </Paragraph>
          <Paragraph>
            I also love hip-hop—some of my favourite artists include
            BROCKHAMPTON, Travis Scott, JPEGMAFIA, and J. Cole to name a few.
          </Paragraph>
          <Paragraph>
            And of course I'll always have a love for old-school soul—my father
            would often play artists like Marvin Gaye, The Supremes, Jackson 5,
            and Earth, Wind & Fire for my sister and I when we were young…
            memories!
          </Paragraph>
        </StyledSection>

        <section>
          <h2>Playing…</h2>
          <Paragraph>
            Ever since I was young I've played video games. These days I feel
            like I have less and less time to play, but I still like to keep up
            with the latest news and hop on every now and then.
          </Paragraph>
          <Paragraph>Some of the game I'm playing lately include:</Paragraph>
          <StyledUl>
            <li>
              <Paragraph>Valorant</Paragraph>
            </li>
            <li>
              <Paragraph>Overwatch</Paragraph>
            </li>
            <li>
              <Paragraph>Mass Effect 2</Paragraph>
            </li>
            <li>
              <Paragraph>Final Fantasy VII Remake</Paragraph>
            </li>
          </StyledUl>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default AboutPage;
