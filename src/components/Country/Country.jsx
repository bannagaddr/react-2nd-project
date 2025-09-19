import React, { useState } from "react";
import "./Country.css";

const Country = ({ getCountriesDataFromMap }) => {
  // country visit event handler
  const [visited, setVisited] = useState(false);
  // country visit clicked function
  const visitHandler = () => {
    // first system for toggling
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // second system for toggling
    // setVisited(visited ? false : true);

    // third system for toggling
    setVisited(!visited);
  };
  return (
    <div className="country">
      <img
        src={getCountriesDataFromMap.flags.flags.png}
        alt={getCountriesDataFromMap.flags.flags.alt}
      />
      <h3>Name: {getCountriesDataFromMap.name.common}</h3>
      <h3>Capital: {getCountriesDataFromMap.capital.capital}</h3>
      <h3>Area: {getCountriesDataFromMap.area.area}</h3>
      <h3>Continents: {getCountriesDataFromMap.continents.continents}</h3>
      <h3>
        Currencies:{" "}
        {Object.keys(getCountriesDataFromMap.currencies.currencies).map(
          (key) => getCountriesDataFromMap.currencies.currencies[key].name
        )}
      </h3>
      <h3>
        Continents:{" "}
        {Object.keys(getCountriesDataFromMap.languages.languages)
          .map((key) => getCountriesDataFromMap.languages.languages[key])
          .join(", ")}
      </h3>
      <h3>
        Status:{" "}
        {getCountriesDataFromMap.area.area > 300000
          ? "Big Country"
          : "Small Country"}
      </h3>
      <button onClick={visitHandler}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
