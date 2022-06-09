import { useOpen } from "../App/context-open";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding-left: ${props => props.open ? "300px" : "70px"} ;
  `;
export const Page = ({ children }) => {
  const open = useOpen();
  return (<Container open={open}>{children}</Container>);
};
