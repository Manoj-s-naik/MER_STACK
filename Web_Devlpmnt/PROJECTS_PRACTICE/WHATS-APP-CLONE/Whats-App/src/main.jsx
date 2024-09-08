import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Wrapper from "./POC/Props_advance/Wrapper.jsx";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./POC/Props_advance/ContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <Wrapper></Wrapper> */}
    <ContextApi></ContextApi>
  </BrowserRouter>
);
