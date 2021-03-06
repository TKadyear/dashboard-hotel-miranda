import { useParams } from "react-router-dom";
import { TopBar } from "../components/NavBar";
import { Page } from "../components/PageContainer";

export const UserEdit = () => {
  const { id } = useParams();
  return (
    <Page>
      <TopBar>
        <h1>{id}</h1>
      </TopBar>
    </Page>
  );
};
