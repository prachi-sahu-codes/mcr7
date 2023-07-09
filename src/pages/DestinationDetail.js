import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Card } from "../component/Card";
import { useData } from "../context/DataContext";

export const DestinationDetail = () => {
  const navigate = useNavigate();
  const { detail } = useParams();
  const { destination } = useData();

  const findDestination = destination?.destinations.find(
    (contint) => Number(contint.id) === Number(detail)
  );

  console.log(findDestination);

  return (
    <div>
      <h1>{findDestination.name}</h1>
      <div>
        <img src={findDestination.image} alt=" pic" className="card-img" />
        <div>
          <strong>description:{findDestination.description}</strong>
        </div>
      </div>
    </div>
  );
};
