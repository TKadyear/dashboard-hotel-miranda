import { useParams } from "react-router-dom";
import { TopBar } from "../components/style-component";

export const BookedRoom = () => {
  const { id } = useParams();
  return (
    <TopBar>
      <h1>{id}</h1>
    </TopBar>)
    ;
};
