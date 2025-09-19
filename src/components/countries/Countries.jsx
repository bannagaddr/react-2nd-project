import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesApiData = use(countriesPromise);
  const countriesData = countriesApiData.countries;
  console.log(countriesData);
  return (
    <div className="countries">
      {countriesData.map((countryDataLopingByMap) => (
        <Country
          key={countryDataLopingByMap.ccn3.ccn3}
          getCountriesDataFromMap={countryDataLopingByMap}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
