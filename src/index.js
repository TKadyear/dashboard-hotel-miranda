import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./App/context-auth";
import { Provider } from "react-redux";
import store from "./App/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./App/theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="dashboard-hotel-miranda">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
