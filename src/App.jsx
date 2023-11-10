import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { IconContext } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(false);

  const defaultTheme =
    JSON.parse(localStorage.getItem("theme")) ??
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);
  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className="Head">
        <h1 className="Head-Title">Where in the world?</h1>
        <button
          className="Head-Btn"
          onClick={() => setIsDarkTheme((prev) => !prev)}
        >
          {isDarkTheme ? (
            <IconContext.Provider value={{ className: "icon" }}>
              <div>
                <FaMoon />
              </div>
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "icon" }}>
              <div>
                <FaSun />
              </div>
            </IconContext.Provider>
          )}
          <span>{isDarkTheme ? "light" : "dark"} mode</span>
        </button>
      </div>
      {!showCountry && (
        <Header setCountries={setCountries} countries={countries} />
      )}

      <Countries
        countries={countries}
        setShowCountry={setShowCountry}
        showCountry={showCountry}
      />
    </div>
  );
}

export default App;
