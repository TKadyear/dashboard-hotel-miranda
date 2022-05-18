import styled from "styled-components";
import { Button } from "./style-component";
const BtnPage = styled(Button)`
  margin: 10px 4px 20px;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  color:${props => props.theme.colors.primary};
  transition: 250ms;
  :hover{
    background: ${props => props.theme.colors.primary};
    color:${props => props.theme.colors.background};
  }
  `;
const BtnNumberPage = styled(BtnPage)`
  min-width: 40px;
  border: 0;
  background: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props => props.selected ? props.theme.colors.background : props.theme.colors.textColor};
  transition: 250ms;

`;

export const Pagination = ({ pages, onClick, actualPage }) => {
  const handlePreviousPage = () => {
    const newPage = actualPage - 1 < 0 ? actualPage : actualPage - 1;
    onClick(newPage);
  };
  const handleNextPage = () => {
    const newPage = actualPage + 1 < pages.length ? actualPage + 1 : actualPage;
    onClick(newPage);
  };
  return (
    <div>
      <BtnPage onClick={handlePreviousPage}>Previous Page</BtnPage>
      {pages.map((v, i) => <BtnNumberPage selected={actualPage === i} key={v + i} onClick={() => onClick(i)}>{i + 1}</BtnNumberPage>)}
      <BtnPage onClick={handleNextPage}>Next Page</BtnPage>
    </div>
  );
};
