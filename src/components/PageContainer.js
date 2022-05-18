import { useContext } from "react";
import { MenuOpenContext } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding-left: ${props => props.open ? "300px" : "70px"} ;
  `;
export const Page = ({ children }) => {
  const open = useContext(MenuOpenContext);
  return (<Container open={open}>{children}</Container>);
};
