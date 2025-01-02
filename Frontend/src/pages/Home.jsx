import React from "react";
import { ArrowRight } from "lucide-react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

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
      {/* <div className="h-screen pt-16">
        <div className="flex justify-center pb-5 text-5xl">
          xAI Medical Diagnosis
        </div>
        <div className="flex justify-center gap-10 bg-blue-300">
          <div className="h-full w-[20%] flex-col rounded-lg bg-gray-500">
            <div className="flex items-center justify-center">
              <img
                src="placeholder.png"
                className="my-3 w-[90%] rounded-lg"
                alt="diabetes"
              />
            </div>
            <div className="flex w-full justify-center bg-purple-300">
              Diabetes
            </div>
            <div className="flex w-full items-center justify-center bg-green-600">
              <button
                className="flex w-[10%] items-center justify-center rounded-2xl bg-green-300"
                onClick={navDB}
              >
                <FaLongArrowAltRight className="h-full w-full" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-screen bg-red-900 pt-16">
        <div className="">xAI Medical Diagnosis</div>
        <div className="flex w-full justify-center gap-5 bg-blue-300">
          <div className="w-[25%] rounded-lg bg-gray-500 p-5">
            <div className="h-full w-full flex-col bg-purple-300">
              <div className="flex justify-center">
                <img src="placeholder.png" className="w-[90%] rounded-lg" />
              </div>
              <div className="flex w-full items-center justify-center bg-orange-300 text-xl">
                DIABETES
              </div>
              <div className="flex w-full items-center justify-center bg-green-300">
                <button
                  onClick={navDB}
                  className="my-2 flex w-[60%] items-center justify-center rounded-full bg-red-300 py-2"
                >
                  <ArrowRight className="" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[25%] rounded-lg bg-gray-500 p-5">
            <div className="h-full w-full flex-col bg-purple-300">
              <div className="flex justify-center">
                <img src="placeholder.png" className="w-[90%] rounded-lg" />
              </div>
              <div className="flex w-full items-center justify-center bg-orange-300 text-xl">
                BREAST CANCER
              </div>
              <div className="flex w-full items-center justify-center bg-green-300">
                <button
                  onClick={navBC}
                  className="my-2 flex w-[60%] items-center justify-center rounded-full bg-red-300 py-2"
                >
                  <ArrowRight className="" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[25%] rounded-lg bg-gray-500 p-5">
            <div className="h-full w-full flex-col bg-purple-300">
              <div className="flex justify-center">
                <img src="placeholder.png" className="w-[90%] rounded-lg" />
              </div>
              <div className="flex w-full items-center justify-center bg-orange-300 text-xl">
                SOME CANCER
              </div>
              <div className="flex w-full items-center justify-center bg-green-300">
                <button
                  onClick={navDB}
                  className="my-2 flex w-[60%] items-center justify-center rounded-full bg-red-300 py-2"
                >
                  <ArrowRight className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
