import styled from "styled-components";

const TablePagination = ({ currentPage, maxPages }) => {
  const MAX_VISIBLE_PAGES = 2;

  const getVisiblePages = () => {
    const visiblePages = [];

    // Always show first two pages
    for (let i = 1; i <= Math.min(MAX_VISIBLE_PAGES, maxPages); i++) {
      visiblePages.push(<PageNumbers key={i}>{i}</PageNumbers>);
    }

    // Add dots if needed before currentPage
    if (currentPage > MAX_VISIBLE_PAGES + 1) {
      visiblePages.push(<PageDots>...</PageDots>);
    }

    // Add currentPage - 1, currentPage, and currentPage + 1 (if applicable)
    for (
      let i = Math.max(currentPage - 1, MAX_VISIBLE_PAGES + 1);
      i <= Math.min(currentPage + 1, maxPages);
      i++
    ) {
      visiblePages.push(
        <PageNumbers key={i} className={`${i === currentPage ? "active" : ""}`}>
          {i}
        </PageNumbers>
      );
    }

    // Add dots if needed before last two pages
    if (currentPage < maxPages - MAX_VISIBLE_PAGES) {
      visiblePages.push(<PageDots>...</PageDots>);
    }

    // Always show last two pages (if applicable)
    for (
      let i = Math.max(maxPages - MAX_VISIBLE_PAGES + 1, currentPage + 2);
      i <= maxPages;
      i++
    ) {
      visiblePages.push(<PageNumbers key={i}>{i}</PageNumbers>);
    }

    return visiblePages;
  };

  return (
    <Container>
      <List>
        <PreviousButton page={currentPage}>Previous</PreviousButton>
        {getVisiblePages()}
        <NextButton ifLastPage={currentPage === maxPages}>Next</NextButton>
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

const PreviousButton = styled(PageButton)`
  color: ${(props) => (props.page === 1 ? "gray" : "#ffd400")};
  cursor: ${(props) => (props.page === 1 ? "default" : "pointer")};
`;

const NextButton = styled(PageButton)`
  color: ${(props) => (props.ifLastPage ? "gray" : "#ffd400")};
  cursor: ${(props) => (props.ifLastPage ? "default" : "pointer")};
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
