import { useState } from "react";
import "./Countries.css";
import Country from "./Country";
import PropTypes from "prop-types";
import CountryDetails from "./CountryDetails";

function Countries({ countries, showCountry, setShowCountry }) {
  const [countryDetails, setCountryDetails] = useState({
    flag: "",
    name: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    topLevelDomain: "",
    currencies: "",
    languages: [],
    border: [],
  });
  return (
    <main>
      {!showCountry ? (
        <div className="CountriesBox">
          {countries.map((country, idx) => (
            <Country
              key={idx}
              country={country}
              setShowCountry={setShowCountry}
              setCountryDetails={setCountryDetails}
            />
          ))}
        </div>
      ) : (
        <div className="CountryDetails">
          <CountryDetails
            countryDetails={countryDetails}
            setShowCountry={setShowCountry}
          />
        </div>
      )}
    </main>
  );
}

Countries.propTypes = {
  countries: PropTypes.array,
  showCountry: PropTypes.bool,
  setShowCountry: PropTypes.func,
};

export default Countries;
