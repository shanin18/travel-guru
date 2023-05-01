import React from "react";
import { Link } from "react-router-dom";

const DateRange = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mt-3">
        <label
          className="block font-montserrat font-medium text-[#818181] mb-2"
          htmlFor="origin"
        >
          Origin
        </label>
        <input
          className="w-full bg-[#F2F2F2] rounded-md border-none outline-none p-5 font-semibold text-lg text-black focus:ring-0"
          type="text"
          id="origin"
          name="origin"
        />
      </div>
      <div className="mt-3">
        <label
          className="block font-montserrat font-medium text-[#818181] mb-2"
          htmlFor="origin"
        >
          Destination
        </label>
        <input
          className="w-full bg-[#F2F2F2] rounded-md border-none outline-none p-5 font-semibold text-lg text-black focus:ring-0"
          type="text"
          id="origin"
          name="origin"
        />
      </div>

      <div className="flex gap-4 mt-3">
        <div className="w-1/2">
          <label
            className="block font-montserrat font-medium text-[#818181] mb-2"
            htmlFor="origin"
          >
            From
          </label>
          <input
            className="w-full bg-[#F2F2F2] rounded-md border-none outline-none p-5 font-semibold text-lg text-black focus:ring-0"
            type="date"
            id="origin"
            name="origin"
          />
        </div>
        <div className="w-1/2">
          <label
            className="block font-montserrat font-medium text-[#818181] mb-2"
            htmlFor="origin"
          >
            To
          </label>
          <input
            className="w-full bg-[#F2F2F2] rounded-md border-none outline-none p-5 font-semibold text-lg text-black focus:ring-0"
            type="date"
            id="origin"
            name="origin"
          />
        </div>
      </div>
      <div className="mt-7">
        <Link to="/hotels">
          <button className="btn w-full font-montserrat text-lg bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize">
            Start Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DateRange;
