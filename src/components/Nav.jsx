import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { TbBriefcase2 } from "react-icons/tb";
import { IoGridOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
// import xomoney from "../../public/xomoney.svg";

const NavCard = ({ setSelectedOption }) => {
  const [activeNav, setActiveNav] = useState("Home");

  const navIcon = [
    { id: 1, name: "Home", icon: <GoHomeFill /> },
    { id: 2, name: "Xomoney", imgSrc: "/xomoney.svg", isNew: true },
    { id: 3, name: "My Trips", icon: <TbBriefcase2 /> },
    { id: 4, name: "Contact Us", icon: <MdSupportAgent /> },
    { id: 5, name: "More", icon: <IoGridOutline />, notif: true },
  ];

  const handleNavClick = (name) => {
    setSelectedOption(name);
    setActiveNav(name);
  };

  return (
    <div className="px-4 pb-4 bg-white border-t-2 border-gray-400">
      <div className="grid grid-cols-5 gap-4">
        {navIcon.map((nav) => (
          <div
            key={nav.id}
            onClick={() => handleNavClick(nav.name)}
            className={`cursor-pointer flex flex-col items-center text-center border-t-4 
              ${
                activeNav === nav.name
                  ? "border-orange-500"
                  : "border-transparent"
              }
              transition-all duration-300 pt-2`}
          >
            <div className="relative">
              {nav.icon ? (
                <div className="w-10 h-10 text-4xl text-gray-500">
                  {nav.icon}
                </div>
              ) : (
                <img
                  src={nav.imgSrc}
                  alt={nav.name}
                  className="w-10 h-10 grayscale-50 opacity-60"
                />
              )}
              {nav.isNew && (
                <div className="absolute -top-2 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  2
                </div>
              )}
              {nav.notif && (
                <div className="absolute -top-2 right-0 bg-red-600 text-white text-xs p-2 rounded-full"></div>
              )}
            </div>
            <p className="text-md font-md mt-2">{nav.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavCard;
