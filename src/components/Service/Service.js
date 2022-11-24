import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const singleService = useLoaderData();

  const {img, title, description} = singleService;

  return (
    <div>
      <section>
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
          <p>{description}</p>
        </div>
      </div>
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default Service;
