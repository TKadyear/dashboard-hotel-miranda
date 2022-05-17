import styled from "styled-components";

export const Table = styled.table`
  width:100%;
  background-color: white;
  border-radius: 12px;
  padding:1rem;
  min-width: 790px;
  border-collapse: collapse;
  font-size: 0.75rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    display:inline;
    font-size: 1rem;
    text-align: left;
  }
  th,td {
    padding: 12px 15px;
  }
  thead, tbody tr {
    cursor: pointer;
    transition: 200ms;
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:last-of-type {
    border-bottom:0;
  }
  tbody tr:hover{
    font-weight: 500;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

}
`;
export const StatusBadge = styled.div`
  color: white;
  text-align: center;
  background-color: ${props => props.status ? "#5ad07a" : "#e23428"};
  padding: 0.75rem;
  border-radius: 12px;
`;
