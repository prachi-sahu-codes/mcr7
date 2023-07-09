import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { data } from "../backend/data";
import { Card } from "../component/Card";
import { useData } from "../context/DataContext";

export const Country = () => {
  const navigate = useNavigate();
  const { continent } = useParams();
  const { setCountry } = useData();
  const findContinent = data.continents.find(
    (contint) => Number(contint.id) === Number(continent)
  );
  const { countries } = findContinent;
  setCountry(findContinent);
  return (
    <div>
      <h2>Top Countries in {findContinent.name} for your next holiday</h2>
      <ul className="card-list">
        {countries.map((country) => (
          <li
            key={country.id}
            className="card"
            onClick={() => navigate(`/country/${country?.id}`)}
          >
            <Card displayData={country} />
          </li>
        ))}
      </ul>
    </div>
  );
};
