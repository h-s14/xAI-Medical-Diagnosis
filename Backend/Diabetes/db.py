from flask import Flask, request, jsonify
from joblib import load 
import numpy as np

# Load the trained model
model = load('Backend/Diabetes/bc_model.joblib')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])

def predict():
    data = request.json  # Get JSON data from the request

    features = np.array([data["Pregnancies"], data["Glucose"], data["BloodPressure"], 
                         data["SkinThickness"], data["Insulin"], data["BMI"], 
                         data["DiabetesPedigreeFunction"], data["Age"]]).reshape(1, -1)

   # Make prediction
    prediction = model.predict(features)[0]
    result = {"prediction": int(prediction)}  # Format the result as a JSON object

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)