import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./App/context-auth";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="dashboard-hotel-miranda">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
