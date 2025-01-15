import NavHome from "../hooks/navHome.js";
import React, { useState } from "react";
import axios from "axios";
import Placeholder from "../components/Placeholder.jsx";

const BCancer = () => {
  const goHome = NavHome();

  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };
  return (
    <>
      <div className="pt-20">
        <Placeholder
          link={
            "https://github.com/h-s14/xAI-Medical-Diagnosis/tree/main/Backend/BCancer"
          }
        />
        {/* <div className="">
          <button className="bg-purple-500" onClick={goHome}>
            Back
          </button>
        </div>
        <div>
          <h1>Breast Cancer Detection</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmit}>Predict</button>
          {prediction && (
            <div>
              <h2>Prediction:</h2>
              <pre>{JSON.stringify(prediction, null, 2)}</pre>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default BCancer;
