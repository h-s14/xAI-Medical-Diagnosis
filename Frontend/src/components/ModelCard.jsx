import React from "react";
import { ArrowRight } from "lucide-react";

const ModelCard = ({ title, img, btn }) => {
  return (
    <div className="w-[20rem] rounded-lg bg-gls2 bg-opacity-60 p-5 shadow-lg backdrop-blur-md">
      <div className="flex-co h-full w-full">
        <div className="flex justify-center">
          <img src={img} className="h-[12rem] w-[90%] rounded-lg" />
        </div>
        <div className="flex w-full items-center justify-center text-xl">
          {title}
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            onClick={btn}
            className="my-2 flex w-[60%] items-center justify-center rounded-full bg-bg-img-grd1 bg-opacity-60 py-2 shadow-lg backdrop-blur-md"
          >
            <ArrowRight className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
