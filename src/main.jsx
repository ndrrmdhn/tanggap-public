import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoute from "./route/index.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);
