import React from 'react';
import { graphql } from 'gatsby';
import Content from '../../components/content';
import Footer from '../../components/footer';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Paragraph } from '../../theme/styled-elements';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  location,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const thePath = location.pathname;
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  const customCrumbLabel = getLastItem(thePath).toLowerCase().replace('/', ' ');

  return (
    <>
      <Content
        pageMeta={{
          title: `${frontmatter.title} |`,
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary developer exploring the intersections of people, design, and technology.',
        }}
      >
        <section>
          <Paragraph>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=' / '
              crumbLabel={customCrumbLabel}
            />
          </Paragraph>
        </section>

        <section>
          <h1>{frontmatter.title}</h1>
          {/* <h6>{frontmatter.date}</h6> */}
          <div
            className='post-content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
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
