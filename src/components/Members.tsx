import styled from "styled-components";
import Table from "./Table";

const Members = () => {
  const data = {
    data: [
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
    ],
    pagination: {
      total: 100,
      per_page: 10,
      current_page: 5,
      last_page: 10,
    },
  };

  return (
    <MembersContainer>
      <Heading>Members</Heading>
      <Table data={data} />
    </MembersContainer>
  );
};

const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 16px;
`;

const MembersContainer = styled.main`
  padding: 20px;
  grid-area: main;
`;

export default Members;
