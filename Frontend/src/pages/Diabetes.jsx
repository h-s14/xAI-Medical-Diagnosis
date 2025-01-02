import React from "react";
import navHome from "../hooks/navHome.js";

const Diabetes = () => {
  const goHome = navHome();
  return (
    <>
      <div>Diabetes</div>
      <button className="bg-purple-500" onClick={goHome}>
        Back
      </button>
    </>
  );
};

export default Diabetes;
