import * as React from 'react';
import { Link } from 'gatsby';
import { Paragraph } from '../../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Content from '../../components/content';
import Footer from '../../components/footer';

const Garden = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace('/', ' ');

  return (
    <>
      <Content
        pageMeta={{
          title: 'Garden |',
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
          <h1>Garden</h1>
          <Paragraph>
            Here is where I cultivate thoughts I've had (mostly related to tech
            &amp; design) in a semi-comprehensible way.
          </Paragraph>
          <Paragraph>
            Coming soon. But for now…{' '}
            <Link to='/garden/hello-world'>stay tuned</Link>!
          </Paragraph>
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default Garden;
