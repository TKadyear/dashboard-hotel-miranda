import styled from "styled-components";

export const Button = styled.button`
  background: #135846;
  padding: 0.75rem 0.5rem;
  border:0;
  border-radius: 0.5rem;
  font-weight: bold;
  color: #FFFFFF;
`;
export const ContainerCard = styled.div`
  display: grid;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  gap: 1rem;
  background: white;
  padding: 2.5rem;
  padding-bottom: 1.5rem;
  box-shadow: 0 4px 8px #58565617;
  border-radius: 12px;
  position:relative;
  margin-top: 37.5px;/* Es por tema del :after*/
  ::after{
    content: "";
    position: absolute;
    top: -37.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height: 75px;
    border-radius: 6px;
    background: ${props => props.image}
  }
`;
export const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid grey;
  :focus{
    border-color: #135846;
  }
`;
export const TopBar = styled.div`
  background-color: white;
  /* width:75vw; */

`;
