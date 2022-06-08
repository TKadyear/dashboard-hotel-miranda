import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
// import { ReactComponent as DashboardIcon } from "./icons/dashboard.svg";
// import { ReactComponent as BookingsIcon } from "./icons/bookings.svg";
// import { ReactComponent as RoomsIcon } from "./icons/rooms.svg";
// import { ReactComponent as ContactIcon } from "./icons/contact.svg";
// import { ReactComponent as UsersIcon } from "./icons/users.svg";
import { Users } from "./pages/Users";
import { BookedRoom } from "./pages/BookedRoom";
import { NewUser } from "./pages/NewUser";
import { UserEdit } from "./pages/UserEdit";
interface ILinks {
  path: string,
  name: string,
  page: JSX.Element,
  icon?: JSX.Element
}
export const links: Array<ILinks> = [{
  path: "/",
  name: "Dashboard",
  page: <Home />,
  // icon: <DashboardIcon />
},
{
  path: "/rooms",
  name: "Rooms",
  page: <Rooms />,
  // icon: <RoomsIcon />
},
{
  path: "/bookings",
  name: "Bookings",
  page: <Bookings />,
  // icon: <BookingsIcon />
},
{
  path: "/contact",
  name: "Contact",
  page: <Contact />,
  // icon: <ContactIcon />
},
{
  path: "/users",
  name: "Users",
  page: <Users />,
  // icon: <UsersIcon />
}
];
export const dynamicLinks: Array<ILinks> = [{
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
  name: "Edit User",
  page: <UserEdit />
}
];
