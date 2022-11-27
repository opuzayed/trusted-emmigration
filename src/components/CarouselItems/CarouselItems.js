import React from "react";
import "./CarouselItems.css";
import { Link } from "react-router-dom";
const CarouselItems = ({ caroData }) => {
  const { id, prev, next, img } = caroData;
  return (
   
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img} className="w-full" alt=" " />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h3 className="text-2xl font-bold text-yellow-200">
            Best Visa Consulting Agency
          </h3>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <h2 className="text-4xl font-bold text-lime-50">
            We Are Trusted Visa And
            <br />
            Emmigration Agency.
          </h2>
        </div>
        <div>
          <p className="font-bold">
            Immigration consultants assist clients with completing documentation
            and acquiring all permits needed to facilitate their move to another
            country.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <Link to="/about">
            <button className="btn btn-secondary mr-5">About Us</button>
          </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
   
  );
};

export default CarouselItems;
