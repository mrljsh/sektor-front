/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../utils/AuthProvider";

const Header = () => {
  const auth = useContext(AuthContext);
  const { clearToken } = auth;

  return (
    <HeaderContainer>
      <img src="/sektor44-logo.png" alt="Sektor44 logo" />
      <Nav>
        <Button onClick={clearToken}>LOG OUT</Button>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: fff;
  height: 64px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  padding: 10px 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Nav = styled.nav``;

export default Header;
