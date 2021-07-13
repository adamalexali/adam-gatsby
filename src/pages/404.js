import * as React from 'react';
import { Link } from 'gatsby';
import { accentText } from '../pages/index';

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title style={accentText}>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>{' '}
        that page couldn't be retrieved.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
