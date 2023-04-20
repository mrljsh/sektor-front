import styled from "styled-components";
import Table from "./Table";
import { useState } from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import AddUser from "./AddUser";


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
      current_page: 1,
      last_page: 10,
    },
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [show, setShow] = useState(false);

  return (
    <MembersContainer>
      <Heading>Users</Heading>
      <Button onClick={() => setShow(true)}>+ Add user</Button>
      <Modal show={show} onClose={() => setShow(false)} title={"Add User"}>
        <AddUser />
      </Modal>
      <Table
        data={data}
        currentPage={currentPage}
        handlePageChange={(number) => setCurrentPage(number)}
      />
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
