import { useState } from "react";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
import { CgArrowsExchange } from "react-icons/cg";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const FlightCard = () => {
  const [tripType, setTripType] = useState("one-way");
  const [selectedFare, setSelectedFare] = useState("");
  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("BOM");

  return (
    <div className=" pt-4">
      <div className="flex justify-center mb-4 space-x-2 bg-gray-300 rounded-full mx-32 py-2">
        <button
          className={`p-1 rounded-full text-xl ${
            tripType === "one-way" ? "bg-white shadow-lg" : "text-black"
          }`}
          onClick={() => setTripType("one-way")}
        >
          One Way
        </button>
        <button
          className={`p-1 text-xl rounded-full ${
            tripType === "round-trip" ? "bg-white shadow-lg" : "text-black"
          }`}
          onClick={() => setTripType("round-trip")}
        >
          Round Trip
        </button>
      </div>

      <div className="flex border-y-1 border-gray-400 relative">
        <div className="text-left border-r-1 w-full border-gray-400 p-4">
          <div className="flex">
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
              maxLength={3}
              className="font-semibold text-2xl bg-transparent border-none outline-none w-12 uppercase text-center"
            />
            <TbPlaneDeparture className="text-3xl mx-2 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 pl-1">New Delhi</p>
        </div>

        <CgArrowsExchange className="font-sm text-4xl absolute top-4 left-1/2 transform -translate-x-1/2 bg-white border-1 border-gray-300 rounded-full" />

        <div className="text-right border-l-1 border-gray-400 w-full p-4">
          <div className="flex justify-end">
            <TbPlaneArrival className="text-3xl mx-2 text-gray-600" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value.toUpperCase())}
              maxLength={3}
              className="font-semibold text-2xl bg-transparent border-none outline-none w-16 uppercase text-center"
            />
          </div>
          <p className="text-sm text-gray-500 pr-1">Mumbai</p>
        </div>
      </div>

      <div className="flex items-center pl-4 py-4 border-b-1 border-gray-300">
        <HiOutlineCalendar className="text-gray-500 mr-2 text-2xl" />
        <span className="font-semibold text-xl">Thu, 2 Jun</span>
      </div>
      <div className="flex items-center pl-4 py-4 border-b-1 border-gray-300">
        <BsPeople className="text-gray-500 mr-2 transform scale-x-[-1] text-2xl" />
        <span className="font-semibold text-xl">2 Travellers • Economy</span>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 text-sm font-medium pt-4 pl-4">
          Special Fares (Optional){" "}
          <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        </p>
        <div className="flex gap-2 pt-2 pl-4">
          {["Student", "Senior Citizen", "Armed Forces"].map((fare) => (
            <button
              key={fare}
              className={`px-3 py-1 text-lg border rounded-full transition-all duration-300 ${
                selectedFare === fare
                  ? "bg-orange-500 text-white shadow-md "
                  : "bg-white text-black font-medium border-purple-500"
              }`}
              onClick={() => setSelectedFare(selectedFare === fare ? "" : fare)}
            >
              {fare}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 px-4 py-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="assured" className="h-6 w-6" />
          <div className="flex flex-col">
            <label
              htmlFor="assured"
              className="text-gray-600 text-lg font-bold"
            >
              Always opt for Assured
            </label>
            <span className="text-xs text-gray-400">₹0 cancellation fee</span>
          </div>
        </div>
        <div className="h-12 w-12 ml-auto">
          <img src="./tatkal.png" alt="tatkal img" />
        </div>
      </div>

      <button className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded-b-4xl flex justify-center items-center">
        <span>
          <CiSearch className="text-2xl mr-1" />
        </span>
        <span>Search Flights</span>
      </button>
    </div>
  );
};

export default FlightCard;
