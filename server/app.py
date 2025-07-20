from flask import Flask, request, jsonify
import joblib
import pandas as pd
import os
from flask_cors import CORS



app = Flask(__name__)
CORS(app)  # Allow requests from React

# Load the trained model from the model directory
model_path = os.path.join(os.path.dirname(__file__), '..', 'model', 'final_rf_model.pkl')
model = joblib.load(model_path)

@app.route('/')
def home():
    return "Credit Card Fraud Detection API is running."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data
        data = request.get_json()

        # Convert to DataFrame
        input_df = pd.DataFrame([data])

        # Predict
        prediction = model.predict(input_df)[0]
        probability = model.predict_proba(input_df)[0].tolist()

        return jsonify({
            "prediction": int(prediction),
            "probability": probability,
            "message": "Fraud" if prediction == 1 else "Not Fraud"
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)