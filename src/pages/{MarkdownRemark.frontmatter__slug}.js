import React from 'react';
import { graphql, Link } from 'gatsby';
import Content from '../components/content';
import Footer from '../components/footer';
import {
  p,
  StyledSection,
  StyledUl,
  ItalicSpan,
  BoldSpan,
} from '../theme/styled-elements';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Content
        pageMeta={{
          title: `${frontmatter.title} |`,
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <p>
            <Link to='/'>/index</Link>
          </p>
        </section>

        <StyledSection>
          <h1>{frontmatter.title}</h1>
          {/* <h6>{frontmatter.date}</h6> */}
          <div
            className='post-content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </StyledSection>
      </Content>
      <Footer />
    </>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
