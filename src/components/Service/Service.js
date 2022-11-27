import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import FacilityService from "../FacilityService/FacilityService";

const Service = () => {
  const singleService = useLoaderData();
  console.log(singleService.facility);
  
  const { _id, img, title, description} = singleService;
  const facilityServices = singleService.facility;

  return (
    <div>
      <section>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section>
      <p className="font-bold text-center text-red-700">TESTIMONIALS</p>
        <h3 className="text-5xl font-bold text-center text-white">What Client Say's?</h3>
        <div className="card-style">
        {
          facilityServices.map(faceService => <FacilityService
          key={faceService._id}
          faceService={faceService}
          ></FacilityService>)
        }
        </div>
      </section>
      <div>
      <Link to={`/checkout/${_id}`}><button className="btn btn-outline btn-warning">Add Review</button></Link>
      </div>
    </div>
  );
};

export default Service;
