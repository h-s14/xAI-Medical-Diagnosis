import React from "react";
import { ArrowRight } from "lucide-react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import ModelCard from "../components/ModelCard";

const Home = () => {
  const navigate = useNavigate();
  const navDB = () => {
    navigate("/diabetes");
  };
  const navBC = () => {
    navigate("/bcancer");
  };
  return (
    <>
      <div className="h-screen bg-bg-img-clr pt-10">
        <div className="h-52 bg-bg-img-clr bg-bg-image bg-custom-size bg-center bg-no-repeat text-white">
          <span className="absolute mx-[36rem] mt-[10rem] text-3xl">
            xAI Medical Diagnosis
          </span>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex max-w-[70%] justify-center gap-5 rounded-lg bg-gls bg-opacity-60 px-7 py-9 shadow-lg backdrop-blur-md">
            {/* Components Starting */}
            <ModelCard title={"DIABETES"} img={"diabetes.jpeg"} btn={navDB} />
            <ModelCard
              title={"BREAST CANCER"}
              img={"diabetes.jpeg"}
              btn={navBC}
            />
            {/* <ModelCard
              title={"SOME CANCER"}
              img={"diabetes.jpeg"}
              btn={navDB}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
