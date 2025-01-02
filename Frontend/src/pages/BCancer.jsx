import React from "react";
import NavHome from "../hooks/navHome.js";

const BCancer = () => {
  const goHome = NavHome();
  return (
    <>
      <div>BCancer</div>
      <button className="bg-purple-500" onClick={goHome}>
        Back
      </button>
    </>
  );
};

export default BCancer;
