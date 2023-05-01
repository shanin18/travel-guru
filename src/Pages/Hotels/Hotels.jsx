import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelCard from "./HotelCard";
const Hotels = () => {
  const hotels = useLoaderData();

  return (
    <div className="container mx-auto flex gap-14 border-t pt-6">
      <div className="w-7/12">
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel}></HotelCard>
        ))}
      </div>
      <div className="w-5/12 border h-screen rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59416.90860216814!2d91.93732651140643!3d21.446659126787107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1682936492426!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-screen"
        ></iframe>
      </div>
    </div>
  );
};

export default Hotels;
