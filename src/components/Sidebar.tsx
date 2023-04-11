import styled from "styled-components";

const Sidebar = () => {
  return (
    <Aside>
      <Link href="#dashboard" className="active">
        Dashboard
      </Link>
      <Link href="#classes">Classes</Link>
      <Link href="#members">Members</Link>
      <Link href="#instructors">Instructors</Link>
      <Link href="#billing">Billing</Link>
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

const Link = styled.a`
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
  }

  &.active {
    background-color: #ffd400;
  }
`;

export default Sidebar;
