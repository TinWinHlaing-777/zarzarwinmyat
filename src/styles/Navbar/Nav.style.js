import styled from "styled-components";
import theme from "../../theme";

export const NavbarContainer = styled.nav`
  background-color: ${theme.color.primary};
  width: 100%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 1194px) {
    position: fixed;
    top: 0;
    z-index: 10;
  }
`;

export const NavHeader = styled.h1`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1194px) {
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding: 16px 10px;
    font-size: 16px;
  }
`;
