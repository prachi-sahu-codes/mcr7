import React from "react";

export const Card = ({ displayData }) => {
  return (
    <div>
      <img src={displayData.image} alt=" pic" className="card-img" />
      <div className="card-content">
        <p>{displayData.name}</p>
      </div>
    </div>
  );
};
