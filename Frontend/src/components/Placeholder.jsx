import React from "react";

const Placeholder = ({ link }) => {
  return (
    <>
      <div className="grid items-center justify-center text-white">
        <div className="flex justify-center">
          The model integration is under development.
        </div>
        <div className="flex justify-center">
          You can check the working models on Github
        </div>
        <div className="flex justify-center">
          <a className="text-blue-500" target="_blank" href={link}>
            {link}
          </a>
        </div>
      </div>
    </>
  );
};

export default Placeholder;
