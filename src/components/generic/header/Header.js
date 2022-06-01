import React, { useContext, useState } from "react";
import NavBar from "../navbar/NavBar";
import "./style.css";
import "../../../style/main.css";
import ThemeContext, { theme } from "../../context/ThemeContext";

const Header = () => {
  const themeCtx = useContext(ThemeContext);
  const [themes, setThemes] = useState(theme.light);

  console.log(themeCtx);

  return (
    <div>
      <header
        style={{ backgroundColor: themes.background, color: themes.color }}
      >
        {themes === theme.light ? (
          <button onClick={() => setThemes(theme.dark)}>تاریک</button>
        ) : (
          <button onClick={() => setThemes(theme.light)}>روشن</button>
        )}
        <h1>
          پروژه من<span>&#128512;</span>
        </h1>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
