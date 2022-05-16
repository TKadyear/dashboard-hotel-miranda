import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { ReactComponent as DashboardIcon } from "./assets/icons/dashboard.svg";
import { ReactComponent as BookingsIcon } from "./assets/icons/bookings.svg";
import { ReactComponent as RoomsIcon } from "./assets/icons/rooms.svg";
import { ReactComponent as ContactIcon } from "./assets/icons/contact.svg";
import { ReactComponent as UsersIcon } from "./assets/icons/users.svg";
import { Users } from "./pages/Users";
import { BookedRoom } from "./pages/BookedRoom";
import { NewUser } from "./pages/NewUser";
import { UserEdit } from "./pages/UserEdit";

export const links = [{
  path: "/",
  name: "Dashboard",
  page: <Home />,
  icon: <DashboardIcon />
},
{
  path: "/rooms",
  name: "Rooms",
  page: <Rooms />,
  icon: <RoomsIcon />
},
{
  path: "/bookings",
  name: "Bookings",
  page: <Bookings />,
  icon: <BookingsIcon />
},
{
  path: "/contact",
  name: "Contact",
  page: <Contact />,
  icon: <ContactIcon />
},
{
  path: "/users",
  name: "Users",
  page: <Users />,
  icon: <UsersIcon />
}
];
export const dynamicLinks = [{
  path: "/bookings/:id",
  name: "Booked Room",
  page: <BookedRoom />
},
{
  path: "/users/new-user",
  name: "New User",
  page: <NewUser />,
},
{
  path: "users/:id/edit",
  page: <UserEdit />
}
];
