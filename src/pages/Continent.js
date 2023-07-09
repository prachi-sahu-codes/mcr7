import React from "react";
import { data } from "../backend/data";
import { useNavigate } from "react-router";
import { Card } from "../component/Card";

export const Continent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h2>Top Continents for your next holiday</h2>
      <ul className="card-list">
        {data.continents.map((continent) => (
          <li
            key={continent.id}
            className="card"
            onClick={() => navigate(`/continent/${continent?.id}`)}
          >
            <Card displayData={continent} />
          </li>
        ))}
      </ul>
    </div>
  );
};
