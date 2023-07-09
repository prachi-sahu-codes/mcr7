import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Card } from "../component/Card";
import { useData } from "../context/DataContext";

export const Destinations = () => {
  const navigate = useNavigate();
  const { destination } = useParams();
  const { country, setDestination } = useData();
  const findDestination = country?.countries.find(
    (contint) => Number(contint.id) === Number(destination)
  );
  const { destinations } = findDestination;
  setDestination(findDestination);
  return (
    <div>
      <h2>Top Destinations in {findDestination.name} for your next holiday</h2>
      <ul className="card-list">
        {destinations.map((destination) => (
          <li
            key={destination.id}
            className="card"
            onClick={() => navigate(`/destination/${destination?.id}`)}
          >
            <Card displayData={destination} />
          </li>
        ))}
      </ul>
    </div>
  );
};
