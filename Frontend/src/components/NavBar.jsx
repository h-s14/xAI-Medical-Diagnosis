import React from "react";

const NavBar = () => {
  return (
    <div className="absolute flex w-full justify-between bg-green-800">
      <div className="flex gap-3 bg-purple-600">
        <div className="bg-blue-300">
          <img src="" alt="logo" />
        </div>
        <div className="bg-blue-300">Home</div>
        <div className="bg-blue-300">Diabetes</div>
        <div className="bg-blue-300">Breast Cancer</div>
        <div className="bg-blue-300">Some Cancer</div>
        <div className="bg-blue-300">About</div>
      </div>
      <div className="bg-purple-600">
        <div className="bg-blue-300">Models</div>
      </div>
    </div>
  );
};

export default NavBar;
