import { TopBar } from "../components/NavBar";
import { Page } from "../components/PageContainer";
import styled from "styled-components";
import { Logo } from "../components/NavBarStyleComponents";
import { IoBedOutline, IoTodayOutline, IoEnterOutline } from "react-icons/io5";
import { CalendarBookedRooms } from "../components/Calendar";
import { Box, SvgBox, BoxFlexRow } from "../components/style-component";
import { RecentMessages } from "../components/RecentMessages";
import { BarChart } from "../components/BarChart";
const Container = styled.main`
  width: 90% ;
  display: grid;
  grid-template-columns: repeat( 4, 1fr );
  grid-template-rows: 96px auto-fit repeat( 2, 0.5fr );
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
        <Box >
          <Logo>
            <SvgBox color="#e23428">
              <IoBedOutline />
            </SvgBox>

            <p><strong>8,461</strong><br />New Booking</p>
          </Logo>
        </Box>
        <Box >
          <Logo>
            <SvgBox bg="#e23428">
              <IoTodayOutline />
            </SvgBox>

            <p><strong>963</strong><br />Scheduled Room</p>

          </Logo>
        </Box>
        <Box>
          <Logo>
            <SvgBox color="#e23428">
              <IoEnterOutline
              />
            </SvgBox>

            <p><strong>753</strong><br />Check In</p>

          </Logo>
        </Box>
        <Box>
          <Logo>
            <SvgBox color="#e23428">
              <IoEnterOutline className="icon-reverse"
              />
            </SvgBox>

            <p><strong>516</strong><br />Checkout</p>
          </Logo>
        </Box>
        <CalendarBookedRooms />
        <Box style={{ gridColumn: "3/5" }} >
          {/* <Spinner></Spinner> */}
          <BarChart />
        </Box>
        {/* <Box style={{ gridColumn: "1/5" }} /> */}
        <BoxFlexRow style={{ gridColumn: "1/5" }}>
          <RecentMessages />
        </BoxFlexRow>
      </Container>
    </Page>
  );
};
