import * as React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = ({ pageContext, location }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          id='themeToggleBtn'
          onClick={(e) =>
            theme === 'light' ? toggleTheme('dark') : toggleTheme('light')
          }
        >
          {theme === 'light' ? (
            <FiSun style={{ color: 'var(--black)' }} />
          ) : (
            <FiMoon style={{ color: 'var(--white)' }} />
          )}
        </button>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
