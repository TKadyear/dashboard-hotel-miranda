import { TopBar } from "../components/NavBar";
import { Page } from "../components/PageContainer";
import styled from "styled-components";
import { Logo } from "../components/NavBarStyleComponents";
import { IoBedOutline, IoTodayOutline, IoEnterOutline } from "react-icons/io5";
import { CalendarBookedRooms } from "../components/Calendar";
const Box = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background:${props => props.bg ? props.bg : props.theme.colors.white};
  box-shadow: ${props => props.boxShadow ? props.theme.boxShadow.dirY : ""};
  p{
    margin:0;
  }
`;
const SvgBox = styled(Box)`
  position:relative;
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
const Container = styled.main`
  width: 90% ;
  display: grid;
  grid-template-columns: repeat( 4, 1fr );
  grid-template-rows: 96px 1fr repeat( 2, 0.75fr );
  gap: 2.25rem;
  margin: auto;
  margin-bottom: 3rem;
`;
export const Home = () => {
  return (
    <Page>
      <TopBar>
        <h1>Home</h1>
      </TopBar>
      <Container>
        <Box boxShadow={true}>
          <Logo>
            <SvgBox color="#e23428">
              <IoBedOutline />
            </SvgBox>

            <p><strong>8,461</strong><br />New Booking</p>
          </Logo>
        </Box>
        <Box boxShadow={true}>
          <Logo>
            <SvgBox bg="#e23428">
              <IoTodayOutline />
            </SvgBox>

            <p><strong>963</strong><br />Scheduled Room</p>

          </Logo>
        </Box>
        <Box boxShadow={true}>
          <Logo>
            <SvgBox color="#e23428">
              <IoEnterOutline
              />
            </SvgBox>

            <p><strong>753</strong><br />Check In</p>

          </Logo>
        </Box>
        <Box boxShadow={true}>
          <Logo>
            <SvgBox color="#e23428">
              <IoEnterOutline className="icon-reverse"
              />
            </SvgBox>

            <p><strong>516</strong><br />Checkout</p>
          </Logo>
        </Box>
        <CalendarBookedRooms />
        <Box boxShadow={true} style={{ gridColumn: "3/5" }} />
        <Box boxShadow={true} style={{ gridColumn: "1/5" }} />
        <Box boxShadow={true} style={{ gridColumn: "1/5" }} />
      </Container>
    </Page>
  );
};
