import * as React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../theme/globalStyle';
import { StyledMain } from '../theme/styled-elements';

// markup
const Content = ({ pageMeta, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Helmet>
          <meta charSet='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='author' content='Adam Ali' />

          <meta name='description' content={pageMeta.description} />
          <title>{pageMeta.title} Adam Ali—UX developer</title>
          <link rel='stylesheet' href='../theme/reset.css' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;800&family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          /> */}
        </Helmet>
        {children}
      </StyledMain>
    </>
  );
};

export default Content;
