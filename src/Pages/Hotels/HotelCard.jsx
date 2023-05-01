import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const HotelCard = ({ hotel }) => {
  const { id, image, name, facilities, price, rating } = hotel;
  return (
    <div className="flex gap-8 mb-11">
      <div>
        <img className="w-[300px] rounded-xl" src={image} alt="image" />
      </div>
      <div>
        <h2 className="text-xl font-semibold font-montserrat">{name}</h2>
        <div>
          {facilities?.map((facility, index) => (
            <p key={index} className="text-[#6A6A6A] font-montserrat">
              {facility}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
            <p className="font-semibold font-montserrat">{rating}</p>
          </div>
          <div>
            <p className="font-montserrat text-lg font-semibold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
