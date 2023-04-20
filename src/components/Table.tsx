import styled from "styled-components";
import TablePagination from "./TablePagination";

const Table = ({ data, currentPage, handlePageChange }) => {
  return (
    <Container>
      <TableContainer>
        <Thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Student</th>
            <th>Date</th>
          </tr>
        </Thead>
        <tbody>
          {data["data"].map((item) => (
            <Row key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName + " " + item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.student ? "✓" : "✗"}</td>
              <td>{item.createdAt}</td>
            </Row>
          ))}
        </tbody>
      </TableContainer>
      <TablePagination
        currentPage={currentPage}
        maxPages={data["pagination"]["last_page"]}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

const Container = styled.div``;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;

  & td {
    padding: 8px;
    border: 1px solid #ddd;
  }
`;

const Row = styled.tr`
  transition: 500ms ease;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const Thead = styled.thead`
  > tr {
    background-color: #ffd400;
  }

  & th {
    border: 1px solid #f2f2f2;
    padding: 24px;
  }
`;

export default Table;
