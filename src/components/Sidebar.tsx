import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Aside>
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/memberships">Memberships</Link>
      <Link to="/types">Membership types</Link>
    </Aside>
  );
};

const Aside = styled.aside`
  height: 100%;
  width: 300px;
  background-color: #f8f9fa;
  padding-top: 20px;
  grid-area: sidebar;
`;

const Link = styled(NavLink)`
  display: block;
  color: #000;
  padding: 16px;
  text-decoration: none;
  transition: 300ms ease;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: 400;

  &:hover {
    background-color: #ddd;
    color: #000;
    padding-left: 24px;
  }

  &.active {
    background-color: #ffd400;
  }
`;

export default Sidebar;
