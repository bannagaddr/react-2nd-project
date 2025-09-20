import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFalags] = useState([]);
  const handleVisitedCountries = (getCountriesDataFromMap) => {
    // console.log("Visited Countries Clicked Work", getCountriesDataFromMap);
    const newVisitedCountries = [...visitedCountries, getCountriesDataFromMap];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flags) => {
    console.log("Flag Added", flags);
    const newVisitedFalags = [...visitedFlags, flags];
    setVisitedFalags(newVisitedFalags);
  };

  const countriesApiData = use(countriesPromise);
  const countriesData = countriesApiData.countries;
  console.log(countriesData);
  return (
    <div>
      <h1>Country List: {countriesData.length}</h1>
      <h2>Visited Countries: {visitedCountries.length}</h2>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((getCountriesDataFromMap) => (
          <li key={getCountriesDataFromMap.cca3.cca3}>
            {getCountriesDataFromMap.name.common}
          </li>
        ))}
      </ol>
      <div className="visited-flags-container">
        {visitedFlags.map((flags, index) => (
          <img src={flags} key={index}></img>
        ))}
      </div>
      <div className="countries">
        {countriesData.map((countryDataLopingByMap) => (
          <Country
            key={countryDataLopingByMap.ccn3.ccn3}
            getCountriesDataFromMap={countryDataLopingByMap}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
