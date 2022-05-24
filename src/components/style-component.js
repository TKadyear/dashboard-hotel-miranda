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
export const Box = styled.div`
  width:${props => props.width};
  height:${props => props.height};
  padding: 1.5rem;
  border-radius: 8px;
  background:${props => props.bg ? props.bg : props.theme.colors.white};
  box-shadow: ${props => props.notBoxShadow ? "" : props.theme.boxShadow.dirY};
  overflow: hidden;
  text-overflow: ellipsis;
  p{
    margin:0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const SvgBox = styled(Box)`
  position:relative;
  /* IMPROVE Make this
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
   */
  color: ${props => props.color ? props.color : props.theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background:${props => props.bg ? props.bg : props.theme.colors.secondary20};
  svg{
  position:absolute;
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  }
  path{
    stroke-width: 42;
  }
  svg.icon-reverse{
    transform: translateX(-50%) translateY(-50%) rotate(0.5turn);
  }
`;
export const BoxFlexRow = styled(Box)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
export const IconButton = styled.button`
  position:relative;
  border: 0;
  border: 2px solid ${props => props.bg ? props.theme.colors[props.bg] : props.theme.colors.primary};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background:${props => props.bg ? props.theme.colors[props.bg] : props.theme.colors.primary};
  transition: 300ms;
  svg{
    position:absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  :hover{
    color:${props => props.bg ? props.theme.colors[props.bg] : props.theme.colors.primary};
    background: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  }
`;
