import * as React from 'react';
import { graphql } from 'gatsby';
import { Paragraph } from '../../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Content from '../../components/content';
import Footer from '../../components/footer';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  p {
    margin-bottom: 0.5rem;
  }

  div {
    margin-bottom: 1.25rem;
  }
`;

const GardenPost = ({ data, pageContext, location }) => {
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
          title: `${data.mdx.frontmatter.title} |`,
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
          <h1>{data.mdx.frontmatter.title}</h1>
          <MarkdownWrapper>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MarkdownWrapper>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default GardenPost;
