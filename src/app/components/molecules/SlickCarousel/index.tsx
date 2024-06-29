import React from "react";
import CostumeImage from "@/app/components/atoms/CostumeImage";
import carousel1 from "public/images/carouselpic1.jpg";
import carousel2 from "public/images/carouselpic2.jpg";

const SlickCarousel = () => {
  return (
    <div className="flex justify-center">
      <div className="carousel w-full h-96 relative">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <CostumeImage
            src={carousel1}
            alt="foto 1"
            className="absolute inset-0"
            layout="fill"
            objectfit="cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <CostumeImage
            src={carousel2}
            alt="foto 2"
            className="absolute inset-0"
            layout="fill"
            objectfit="cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <CostumeImage
            src={carousel1}
            alt="foto 3"
            className="absolute inset-0"
            layout="fill"
            objectfit="cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full">
          <CostumeImage
            src={carousel2}
            alt="foto 4"
            className="absolute inset-0"
            layout="fill"
            objectfit="cover"
          />
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
    </div>
  );
};

export default SlickCarousel;
