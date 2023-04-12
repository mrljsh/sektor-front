import styled from "styled-components";
import Table from "./Table";

const Members = () => {
  const data = [
    {
      id: 2,
      firstName: "Nikola",
      lastName: "Nikolic",
      email: "nikolicn@gmail.com",
      student: true,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
    {
      id: 3,
      firstName: "Marko",
      lastName: "Markovic",
      email: "marecare@yahoo.com",
      student: false,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
    {
      id: 4,
      firstName: "Ivana",
      lastName: "Ivanovic",
      email: "ivana@ivanovic.com",
      student: true,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
    {
      id: 2,
      firstName: "Nikola",
      lastName: "Nikolic",
      email: "nikolicn@gmail.com",
      student: true,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
    {
      id: 3,
      firstName: "Marko",
      lastName: "Markovic",
      email: "marecare@yahoo.com",
      student: false,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
    {
      id: 4,
      firstName: "Ivana",
      lastName: "Ivanovic",
      email: "ivana@ivanovic.com",
      student: true,
      createdAt: "0001-01-01T00:00:00",
      isActive: false,
    },
  ];

  return (
    <MembersContainer>
      <Heading>Members</Heading>
      <Button>+ Add member</Button>
      <Table data={data} />
    </MembersContainer>
  );
};

const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 16px;
  display: inline-flex;
`;

const MembersContainer = styled.main`
  padding: 20px;
  grid-area: main;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  float: right;
  background-color: #ffd400;
  color: white;
  padding: 1rem;
  transition: 300ms ease-in-out;

  &:hover {
    border-radius: 0.6rem;
  }
`;

export default Members;
