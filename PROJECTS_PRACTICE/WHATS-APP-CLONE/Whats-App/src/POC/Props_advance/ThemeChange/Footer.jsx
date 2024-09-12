import React from "react";
import { useContext } from "react";
import ThemeWrapper from "./ThemeContext";

function Footer() {
  return (
    <>
      <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
        <div>Footer</div>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <div className="_____________________________"></div>
      </div>
    </>
  );
}

function Option() {
  const isDark = useContext(ThemeWrapper);
  return(
     <div className={`${isDark ? "dark" : "light"}`}>Option</div>
    )
}
export default Footer;
