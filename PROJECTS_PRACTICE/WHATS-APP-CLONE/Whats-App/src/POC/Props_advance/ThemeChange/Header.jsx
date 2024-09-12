
import { useDarkTheme } from "./ThemeContext";

function Header() {
  return (
    <>
      <div>Header</div>
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
  const isDark = useDarkTheme();
  return <div className={`${isDark ? "dark" : "light"}`}>Option</div>;
}

export default Header;
