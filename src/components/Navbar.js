import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styles
const StyledNav = styled.nav`
  margin: 2rem auto 1rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavText = styled.p`
  font-size: 0.75em;
  padding: 0 0.375rem;
  color: var(--subtleColor);
`;

// component
const Navbar = () => {
  return (
    <StyledNav>
      <NavText>
        <Link to='/'> home</Link>
      </NavText>
      <NavText>|</NavText>
      <NavText>
        <Link to='/about'> about</Link>
      </NavText>
      <NavText>|</NavText>
      <NavText>
        <Link to='/design'> design</Link>
      </NavText>
      <NavText>|</NavText>
      <NavText>
        <Link to='/development'> dev</Link>
      </NavText>
      <NavText>|</NavText>
      <NavText>
        <Link to='/curriculum-vitae'> cv</Link>
      </NavText>
    </StyledNav>
  );
};

export default Navbar;
