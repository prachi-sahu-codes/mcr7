import React from "react";
import { data } from "../backend/data";

export const Continent = () => {
  console.log(data);
  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents for your next holiday</h2>
      <ul className="card-list">
        {data.continents.map((continent) => (
          <li key={continent.id} className="card">
            <img
              src={continent.image}
              alt="continent pic"
              className="card-img"
            />
            <div className="card-content">
              <p>{continent.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
