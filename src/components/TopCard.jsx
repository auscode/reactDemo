import { useState } from "react";
import FlightCard from "./Cards/FlightCard";
import TrainCard from "./Cards/TrainCard";
import BusCard from "./Cards/BusCard";
import HotelCard from "./Cards/HotelCard";

const data = [
  {
    id: "flights",
    name: "Flights",
    img: "./flight.svg",
    component: <FlightCard />,
  },
  {
    id: "trains",
    name: "Trains",
    img: "./train.svg",
    component: <TrainCard />,
  },
  { id: "buses", name: "Buses", img: "./bus.svg", component: <BusCard /> },
  {
    id: "hotels",
    name: "Hotels",
    img: "./hotel.svg",
    isNew: true,
    component: <HotelCard />,
  },
];

const TopCard = () => {
  const [selected, setSelected] = useState("flights");

  return (
    <div className="flex flex-col items-center px-42">
      <div className="relative flex space-x-8 px-8">
        {data.map((item) => (
          <button
            key={item.id}
            className={`p-1 pb-2 text-lg flex flex-col ${
              selected === item.id ? "border-b-4 border-blue-500" : ""
            }`}
            onClick={() => setSelected(item.id)}
          >
            <img src={item.img} alt={item.name} className="w-18 h-18" />
            {item.isNew && (
              <span className="absolute top-4 right-9 bg-purple-600 text-white text-xs px-1 rounded-full">
                New
              </span>
            )}
            <label
              className={`ml-2 ${
                selected === item.id ? "font-bold" : "font-normal"
              }`}
            >
              {item.name}
            </label>
          </button>
        ))}
      </div>
      <div className="border border-gray-400 rounded-4xl w-120 bg-white shadow-2xl h-132">
        {data.find((item) => item.id === selected)?.component}
      </div>
    </div>
  );
};

export default TopCard;
