import { useParams } from "react-router-dom";
import { TopBar } from "../components/base/style-component";

export const UserEdit = () => {
  const { id } = useParams();
  return (
    <TopBar>
      <h1>{id}</h1>
    </TopBar>)
    ;
};
