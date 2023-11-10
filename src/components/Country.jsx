import "./Country.css";
import PropTypes from "prop-types";

function Country({ country, setShowCountry, setCountryDetails }) {
  const handleClick = () => {
    setShowCountry(true);
    setCountryDetails((prev) => {
      return {
        ...prev,
        flag: country.flags.png,
        name: country.name.common,
        nativeName: country.name.official,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borders: country.borders,
      };
    });
  };
  return (
    <div className="CountryBox" onClick={handleClick}>
      <img src={country.flags.png} alt="" className="CountryBox-FlagImg" />
      <div className="CountryBox-TxtBox">
        <h1 className="CountryBox-TxtBox-Name">{country.name.common}</h1>
        <p className="CountryBox-TxtBox-Para">
          <span>population:</span> {country.population}
        </p>
        <p className="CountryBox-TxtBox-Para">
          <span>region:</span> {country.region}
        </p>
        <p className="CountryBox-TxtBox-Para">
          <span>capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object,
  setShowCountry: PropTypes.func,
  setCountryDetails: PropTypes.func,
};

export default Country;
