import styled from 'styled-components';

export const StyledNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledMain = styled.main`
  min-height: 100vh;
  padding: 1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

export const StyledDiv = styled.div`
  margin-bottom: 1.25rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    text-align: left;
  }
`;

export const StyledSection = styled.section`
  margin: 1.5rem 0;
`;

export const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 40px;

  @media only screen and (max-width: 700px) {
    padding-left: 1rem;
  }
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;

export const ItalicSpan = styled.span`
  font-style: italic;
`;

export const StyledFooter = styled.footer`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

// export const FooterText = styled.p`
//   font-size: 0.625rem;
// `;
