import { useState } from "react";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import Nav from "./Nav";
import ComingSoon from "./ComingSoon";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Home");
  return (
    <div className="w-140 max-w-screen-lg bg-white shadow-lg flex flex-col items-center justify-between min-h-screen pt-4">
      <div className="flex-1 overflow-y-auto">
        {selectedOption === "Home" ? (
          <>
            <TopCard />
            <div className="pt-10 pb-40 flex flex-col items-center">
              <BottomCard />
            </div>
          </>
        ) : (
          <ComingSoon />
        )}
      </div>

      {/* Fixed Navigation Bar */}
      <div className="w-140 fixed bottom-0 bg-white shadow-md">
        <Nav setSelectedOption={setSelectedOption} />
      </div>
    </div>
  );
};

export default Home;
