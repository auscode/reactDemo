import { SlPlane } from "react-icons/sl";
import { BsCreditCard } from "react-icons/bs";
import { LuArmchair } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaCcVisa } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const BottomCard = () => {
  const services = [
    { id: 1, name: "Flight Status", icon: <SlPlane /> },
    {
      id: 2,
      name: "Credit Card",
      icon: <BsCreditCard />,
      isNew: true,
    },
    { id: 3, name: "Web Check-in", icon: <LuArmchair /> },
    { id: 4, name: "Plan", icon: <FaRegCircleCheck /> },
    { id: 5, name: "Fare Alerts", icon: <MdOutlineCircleNotifications /> },
    { id: 6, name: "Group Booking", icon: <GrGroup /> },
    { id: 7, name: "Book Visa", icon: <FaCcVisa /> },
    { id: 8, name: "Travel Insurance", icon: <MdOutlineHealthAndSafety /> },
  ];

  return (
    <div className="p-4 bg-white border border-gray-400 rounded-4xl shadow-lg w-120">
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="w-8 h-8 text-4xl text-gray-500">
                {service.icon}
              </div>
              {service.isNew && (
                <span className="absolute -top-2 right-5 bg-purple-600 text-white text-xs px-1 rounded-full">
                  New
                </span>
              )}
            </div>
            <p className="text-sm font-md mt-2 px-4">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomCard;
