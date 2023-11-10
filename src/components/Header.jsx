import "./Header.css";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

function Header({ setCountries }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");

  const getData = async () => {
    try {
      const data = await axios.get(" https://restcountries.com/v3.1/all");
      setCountries(data.data);
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  const getDataByName = async (name) => {
    try {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountries(data.data);
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };

  useEffect(() => {
    if (searchCountry) {
      getDataByName(searchCountry);
    } else {
      getData();
    }
  }, [searchCountry]);

  const getDataByRegion = async (region) => {
    try {
      const data = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setCountries(data.data);
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };

  const handleSelect = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (region) {
      getDataByRegion(region);
    } else {
      getData();
    }
  }, [region]);

  return (
    <header>
      <div className="FormBox">
        <label htmlFor="country" className="FormBox-Label">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            className="FormBox-Input"
            onChange={handleChange}
          />

          <IconContext.Provider value={{ className: "searchIcon" }}>
            <div>
              <FaSearch />
            </div>
          </IconContext.Provider>
        </label>

        <select
          name="region"
          id="region"
          className="FormBox-Select"
          onChange={handleSelect}
        >
          <option hidden value="">
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </header>
  );
}

Header.propTypes = {
  setCountries: PropTypes.func,
  countries: PropTypes.array,
};

export default Header;
