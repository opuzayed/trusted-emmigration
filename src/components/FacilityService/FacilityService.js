import React from "react";

const FacilityService = ({ faceService }) => {
  const { img, name, details } = faceService;
  return (
    <div>
       
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
        </div>
        <figure className="h-80">
          <img src={img} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default FacilityService;
