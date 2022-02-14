import * as React from 'react';
import {
  Paragraph,
  StyledSection,
  StyledNav,
  StyledUl,
} from '../../theme/styled-elements';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import ThemeToggle from '../../components/themeToggle';
import Content from '../../components/content';
import Footer from '../../components/footer';
import FeaturedProjectTemplate from '../../components/featureProject';

const FrontEndCoop = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const thePath = location.pathname;
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  const customCrumbLabel = getLastItem(thePath).toLowerCase().replace('/', ' ');

  const childProps = {
    role: 'Front-End Developer',
    company: 'LinkMentalHealth',
    jobType: 'Co-op; part-time',
    dateTime: {
      start: { dateTime: '2020-01', semantic: 'January 2020' },
      end: { dateTime: '2020-05', semantic: 'May 2020' },
    },
  };

  return (
    <>
      <Content
        pageMeta={{
          title: 'Front-End Co-op |',
          keywords: ['ux', 'front-end', 'designer', 'developer'],
          description:
            'Adam Ali is a multidisciplinary developer exploring the intersections of people, design, and technology.',
        }}
      >
        <StyledNav>
          <p>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=' / '
              crumbLabel={customCrumbLabel}
            />
          </p>
          <ThemeToggle />
        </StyledNav>

        <section>
          <h1>Front-End Co-op Placement</h1>
          <FeaturedProjectTemplate jobDesc={childProps} />
        </section>
      </Content>
      <Footer />
    </>
  );
};

export default FrontEndCoop;
