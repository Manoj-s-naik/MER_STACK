import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Wrapper from "./POC/Props_advance/Wrapper.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import RouterApp from "./POC/Routing/RouterApp.jsx";
// import ContextApi from "./POC/Props_advance/ContextApi.jsx";
// import ThemeWrapper from "./POC/Props_advance/ThemeChange/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ThemeWrapper> */}
    <App />
    {/* </ThemeWrapper>  */}
     {/* <Wrapper></Wrapper>  */}
    {/* <ContextApi></ContextApi> */}
    {/* <RouterApp></RouterApp> */}
  </BrowserRouter>
);





