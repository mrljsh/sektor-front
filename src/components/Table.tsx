import styled from "styled-components";

const Table = ({ data }) => {
  return (
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
        {data.map((item) => (
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
  );
};

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
