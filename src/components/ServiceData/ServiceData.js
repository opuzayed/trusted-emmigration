import React from "react";
import { Link } from 'react-router-dom';

const ServiceData = ({ sData }) => {
  const { _id, title, img, price, description } = sData;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
            {
                description.length > 100 ? (
                    <>
                    {
                        description.slice(0,100) + "..." 
                    }
                    
                    {
                        " "

                    }
                    <Link to={`/service/${_id}`}> <button className="btn btn-info">View Details</button></Link>
                    {
                        " "
                    }
                    </>
                )
                :
                (description) 
            }
        </p>
        <p>Price:${price}</p>
        
      </div>
    </div>
  );
};

export default ServiceData;
