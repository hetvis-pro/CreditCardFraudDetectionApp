🛡️ Credit Card Fraud Detection
This is an end-to-end machine learning web application for detecting credit card fraud in real-time. It uses a trained Random Forest classifier on an imbalanced dataset, handled using SMOTE, and provides predictions via a Flask API with a React.js frontend.

📁 Project Structure
credit-card-fraud-detection/
│
├── client/ # React frontend
│ ├── src/
| ├── components/FraudForm.js <-- Input form
| ├── package.json # React dependencies
│ └── App.js  
│
├── server/ # Flask backend
│ ├── app.py
│
├── model/
│ └── final_rf_model.pkl # Trained model
│
├── notebooks/ # Jupyter notebook for model training
│
├── requirements.txt # Python dependencies
|
└── README.md # You're here!

🚀 Features
✅ Preprocessed credit card dataset

✅ SMOTE for handling imbalanced data

✅ Trained Random Forest classifier
✅ REST API with Flask
✅ Frontend with React + Bootstrap
✅ Predict if a transaction is Fraud or Not Fraud
✅ User-friendly UI

⚙️ Setup Instructions

🔧 1. Clone the repository
git clone https://github.com/hetvis-pro/CreditCardFraudDetectionApp.git
cd CreditCardFraudDetectionApp

🧠 2. Backend Setup (Flask)

1. Install dependencies:
   pip install -r requirements.txt

2. Run Flask server:
   cd server
   python app.py
   The server runs at: http://localhost:5000

⚛️ 3. Frontend Setup (React)
1.Install dependencies:
cd client
npm install

2. Run React app:
   npm start
   The app runs at: http://localhost:3000

🔌 API Endpoint
POST /predict
URL: http://localhost:5000/predict

Headers:
Content-Type: application/json

Sample JSON Request Body:

{
"V1": -1.3598,
"V2": -0.0728,
"V3": 2.5363,
"V4": 1.3781,
"V5": -0.3383,
"V6": 0.4624,
"V7": 0.2396,
"V8": 0.0987,
"V9": 0.3638,
"V10": 0.0908,
"V11": -0.5516,
"V12": -0.6178,
"V13": -0.9914,
"V14": -0.3112,
"V15": 1.4682,
"V16": -0.4704,
"V17": 0.2076,
"V18": 0.0258,
"V19": 0.4039,
"V20": 0.2514,
"V21": -0.0183,
"V22": 0.2778,
"V23": -0.1104,
"V24": 0.0669,
"V25": 0.1285,
"V26": -0.1891,
"V27": 0.1336,
"V28": -0.0210,
"Amount": 149.62
}

Response:

{
"prediction": 0,
"probability": [0.9982, 0.0018],
"message": "Not Fraud"
}

📦 Requirements
Python 3.8+
Flask 3.1.1
React 18+
scikit-learn
pandas
joblib
imbalanced-learn
