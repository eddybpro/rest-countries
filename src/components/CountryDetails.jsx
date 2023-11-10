import "./CountryDetails.css";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";

function CountryDetails({ countryDetails, setShowCountry }) {
  const renderMultipleObjects = (objects, name) => {
    return Object.values(objects)
      .map((object) => {
        if (name && object[name]) {
          return object[name];
        } else {
          return object;
        }
      })
      .join(", ");
  };
  return (
    <div className="Wrapper">
      <button className="Wrapper-Btn" onClick={() => setShowCountry(false)}>
        <IconContext.Provider value={{ className: "arrowLeft" }}>
          <div>
            <FaArrowLeft />
          </div>
        </IconContext.Provider>
        <span>back</span>
      </button>
      <div className="DetailsBox">
        <div className="DetailsBox-ImgBox">
          <img src={countryDetails.flag} alt="" />
        </div>
        <div className="DetailsBox-TxtBox">
          <h1 className="DetailsBox-TxtBox-Name">{countryDetails.name}</h1>
          <div className="DetailsBox-TxtBox-Box">
            <div>
              <h3>
                <span>native name: </span>
                {countryDetails.nativeName}
              </h3>
              <h3>
                <span>population: </span>
                {countryDetails.population}
              </h3>
              <h3>
                <span>region: </span>
                {countryDetails.region}
              </h3>
              <h3>
                <span>sub region :</span>
                {countryDetails.subRegion}
              </h3>
              <h3>
                <span>capital: </span>
                {countryDetails.capital}
              </h3>
            </div>
            <div>
              <h3>
                <span>top level domain: </span>
                {countryDetails.topLevelDomain}
              </h3>
              <h3>
                <span>currencies: </span>
                {countryDetails.currencies
                  ? renderMultipleObjects(countryDetails.currencies, "name")
                  : ""}
              </h3>
              <h3>
                <span>languages: </span>
                {countryDetails.languages
                  ? renderMultipleObjects(countryDetails.languages)
                  : ""}
              </h3>
            </div>
          </div>

          {countryDetails.borders && (
            <div className="DetailsBox-TxtBox-BordersBox">
              <h3 className="DetailsBox-TxtBox-BordersBox-Title">
                <span>border countries: </span>
              </h3>
              <div className="DetailsBox-TxtBox-BordersBox-Btns">
                {countryDetails.borders
                  ? countryDetails.borders.map((border, idx) => (
                      <button key={idx}>{border}</button>
                    ))
                  : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

CountryDetails.propTypes = {
  countryDetails: PropTypes.object,
  setShowCountry: PropTypes.func,
};

export default CountryDetails;
