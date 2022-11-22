import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://media.istockphoto.com/id/1189510256/photo/u-s-citizenship-and-immigration-services-office-located-in-downtown-san-francisco.jpg?s=612x612&w=0&k=20&c=MuSKGkSiGSLkP7bQxLt6dUZauSIJiIVB5FJICxLMiR4=" className="w-full" alt=" "/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://thumbs.dreamstime.com/b/immigration-5361678.jpg" className="w-full" alt=" "/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://st4.depositphotos.com/5586578/40098/i/600/depositphotos_400983154-stock-photo-passport-control-immigration-service-hand.jpg" className="w-full" alt=" " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://c8.alamy.com/comp/G9ND2W/immigration-service-launches-new-uniform-G9ND2W.jpg" className="w-full" alt=" "/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
