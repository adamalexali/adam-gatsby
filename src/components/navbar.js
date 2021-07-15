import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styles
const StyledNav = styled.nav`
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavText = styled.p`
  padding: 0 0.5rem;
  color: #c4c4c4;
`;

// component
const Navbar = () => {
  return (
    <StyledNav>
      <NavText>
        <Link to='/'> Home</Link>
      </NavText>
      <NavText>|</NavText>
      <NavText>
        <Link to='/about'> About</Link>
      </NavText>
    </StyledNav>
  );
};

export default Navbar;
