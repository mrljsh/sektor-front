import styled from "styled-components";

const TablePagination = () => {
  return (
    <Container>
      <List>
        <PageButton>Prethodna</PageButton>
        <PageNumbers>1</PageNumbers>
        <PageNumbers>2</PageNumbers>
        <PageNumbers>3</PageNumbers>
        <PageNumbers>4</PageNumbers>
        <PageDots>...</PageDots>
        <PageNumbers>10</PageNumbers>
        <PageButton>Sledeca</PageButton>
      </List>
    </Container>
  );
};

export default TablePagination;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #f2f2f2;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const PageButton = styled.li`
  display: inline-block;
`;

const PageNumbers = styled.li`
  display: inline-block;
`;

const PageDots = styled.li`
  display: inline-block;
`;
