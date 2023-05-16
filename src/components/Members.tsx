import styled from "styled-components";
import Table from "./Table";
import { Modal } from "./Modal";
import { useContext, useEffect, useState } from "react";
import AddUser from "./AddUser";
import { getUsers } from "../utils/Client";
import { AuthContext } from "../utils/AuthProvider";

const Members = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);

  const auth = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const response = await getUsers(
        `?pageNumber=${currentPage}`,
        auth?.token
      );
      setData(JSON.parse(await response));
    })();
  }, [currentPage, auth]);

  return (
    <MembersContainer>
      <Heading>Users</Heading>
      <Button onClick={() => setShow(true)}>+ Add user</Button>
      <Modal show={show} onClose={() => setShow(false)} title={"Add User"}>
        <AddUser />
      </Modal>
      {data !== null && (
        <Table
          data={data}
          currentPage={currentPage}
          handlePageChange={(number: number) => setCurrentPage(number)}
        />
      )}
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
