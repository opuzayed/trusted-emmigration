import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowServices from "../ShowServices/ShowServices";

const Services = () => {
  const allServices = useLoaderData();
  return (
    <div className="container">
      <div className="card-style">
        {allServices.map((allService) => (
          <ShowServices
            key={allService._id}
            allService={allService}
          ></ShowServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
