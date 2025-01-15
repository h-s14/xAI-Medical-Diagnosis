import React from "react";
import navHome from "../hooks/navHome.js";
import Placeholder from "../components/Placeholder.jsx";

const Diabetes = () => {
  const goHome = navHome();
  return (
    <>
      <div className="pt-20">
        {/* <button className="bg-purple-500" onClick={goHome}>
        Back
      </button> */}

        <Placeholder
          link={
            "https://github.com/h-s14/xAI-Medical-Diagnosis/tree/main/Backend/Diabetes"
          }
        />
      </div>
    </>
  );
};

export default Diabetes;
