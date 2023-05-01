import React from "react";
import Header from "../Pages/Shared/Header";
import bg from "../assets/images/others/background.png";
import Heading from "../Pages/Shared/Heading";
import DateRange from "../Pages/Shared/DateRange";

const BookingLayout = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 inset-0 bg-[#0000007e]">
        <Header></Header>
        <div className="h-[calc(100vh-132px)] container mx-auto flex items-center justify-between">
          <div className="w-2/6">
            <Heading>
              <p className="text-white font-montserrat mt-7">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>
            </Heading>
          </div>
          <div className="w-2/6">
            <DateRange></DateRange>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
