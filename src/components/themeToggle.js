import * as React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeToggle = ({ pageContext, location }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type='checkbox'
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          Dark mode
        </label>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
