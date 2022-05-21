import styled from "styled-components";
export const Button = styled.button`
  background: ${props => props.bg || "#135846"};
  padding: 0.75rem 0.5rem;
  border:0;
  border-radius: 0.5rem;
  font-weight: bold;
  color: #FFFFFF;
  cursor:pointer;
`;
export const ContainerCard = styled.div`
  display: grid;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  gap: 1rem;
  background: white;
  padding: 2.5rem;
  padding-bottom: 1.5rem;
  box-shadow: ${props => props.theme.boxShadow.dirY};
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
    background:${props => props.img ? `url(${props.img}) no-repeat` : ""};
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
export const Container = styled.div`
  padding: 2.75rem 2.5rem;
`;

export const Spinner = styled.div`
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
  position:relative;
  top: 45%;
  left: 45%;
  width: 4rem;
  height: 4rem;
  border: 0.5rem solid transparent;
  border-left-color:${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 50%;
  animation: spin 800ms linear infinite;
`;
