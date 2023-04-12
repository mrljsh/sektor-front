import styled from "styled-components";

const TablePagination = () => {
  return (
    <Container>
      <List>
        <PageButton>Prethodna</PageButton>
        <PageNumbers className="active">1</PageNumbers>
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
  margin: 1rem;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    font-size: 1rem;
  }
`;

const PageButton = styled.li`
  color: #ffd400;
  font-weight: 600;
  cursor: pointer;
`;

const PageNumbers = styled.li`
  cursor: pointer;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
  transition: 300ms ease-in-out;

  &.active {
    background-color: #ffd400;
    font-weight: 600;
  }

  &:hover:not(.active) {
    color: #ffd400;
  }
`;

const PageDots = styled.li`
  cursor: default;
  width: 2.6rem;
  height: 2.6rem;
  color: #ffd400;
`;
