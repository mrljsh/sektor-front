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
      Members
      <Table data={data} />
    </MembersContainer>
  );
};

const MembersContainer = styled.main`
  padding: 20px;
  grid-area: main;
`;

export default Members;
