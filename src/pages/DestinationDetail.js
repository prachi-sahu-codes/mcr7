import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

export const DestinationDetail = () => {
  const { detail } = useParams();
  const { destination } = useData();

  const findDestination = destination?.destinations.find(
    (contint) => Number(contint.id) === Number(detail)
  );

  console.log(findDestination);

  return (
    <div>
      <h1>{findDestination?.name}</h1>
      <div className="card-flex">
        <img src={findDestination?.image} alt=" pic" className="card-img" />
        <div>
          <p>
            <strong>Description:</strong>
            {findDestination?.description}
          </p>
          <p>
            <strong>Ratings:</strong> {findDestination?.ratings}
          </p>
          <p>
            <strong>Reviews:</strong> {findDestination?.reviews}
          </p>
          <p>
            <strong>Location:</strong> {findDestination?.location}
          </p>
          <p>
            <strong>Opening hours:</strong> {findDestination?.openingHours}
          </p>
          <p>
            <strong>TicketPrice:</strong> {findDestination?.ticketPrice}
          </p>
          <p>
            <strong>Website:</strong> {findDestination?.website}
          </p>
        </div>
      </div>
    </div>
  );
};
