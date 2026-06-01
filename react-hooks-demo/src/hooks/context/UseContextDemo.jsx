import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function UseContextDemo() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar Tema
      </button>
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);

  return <h2>Tema: {theme}</h2>;
}
