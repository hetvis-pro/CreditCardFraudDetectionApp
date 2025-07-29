---

# 🛡️ Credit Card Fraud Detection App (ML Project)

An end-to-end machine learning web application for real-time credit card fraud detection using a trained Random Forest classifier on an imbalanced dataset. SMOTE is used for class balancing, and predictions are served through a Flask API with a React.js frontend.

---

## 🚀 Features

* Preprocessed and cleaned credit card transaction dataset
* SMOTE applied to handle imbalanced data
* Trained Random Forest classifier with high performance
* Flask-based REST API backend
* React.js + Bootstrap-based interactive frontend
* Predicts whether a transaction is Fraud or Not Fraud
* User-friendly interface with clear classification output

---

## 📁 Project Structure

```
credit-card-fraud-detection/
├── client/                 # React frontend
│   ├── src/
│   │   └── components/FraudForm.js  # Input form component
│   ├── App.js
│   └── package.json        # React dependencies
│
├── server/                # Flask backend
│   └── app.py
│
├── model/                 # Trained ML model
│   └── final_rf_model.pkl
│
├── notebooks/             # Jupyter notebooks for EDA/training
│
├── requirements.txt       # Python dependencies
└── README.md              # You're reading it!
```

---

## 📊 Model & Tech Stack

* **Model**: Random Forest Classifier
* **Data Handling**: SMOTE (for imbalance)
* **Libraries**: scikit-learn, pandas, imbalanced-learn, joblib
* **Frontend**: React.js + Bootstrap
* **Backend**: Flask (Python)
* **API**: RESTful POST endpoint (`/predict`)

---

## 🧠 ML Training Details

* **Algorithm**: Random Forest
* **Imbalanced Handling**: SMOTE oversampling
* **Evaluation Metrics**: Accuracy, F1-score, ROC-AUC
* **Notebook**: Included in `notebooks/` directory

---

## 💻 How to Run Locally

```bash
# 1. Clone this repository
git clone https://github.com/hetvis-pro/CreditCardFraudDetectionApp.git
cd CreditCardFraudDetectionApp
```

### 🧠 Backend Setup (Flask)

```bash
# Create virtual environment and install dependencies
pip install -r requirements.txt

# Start Flask server
cd server
python app.py

# The Flask server will run at:
http://localhost:5000
```

### ⚛️ Frontend Setup (React)

```bash
# Navigate to React frontend and install dependencies
cd client
npm install

# Start React development server
npm start

# The app will be available at:
http://localhost:3000
```

---

## 🔌 API Endpoint

### POST `/predict`

* **URL**: `http://localhost:5000/predict`
* **Headers**: `Content-Type: application/json`

#### ✅ Sample JSON Request

```json
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
```

#### ✅ Sample Response

```json
{
  "prediction": 0,
  "probability": [0.9982, 0.0018],
  "message": "Not Fraud"
}
```

---

## 📦 Requirements

* Python 3.8+
* Flask 3.1.1
* React 18+
* scikit-learn
* pandas
* joblib
* imbalanced-learn

---

## 🚧 Known Limitations & Future Improvements

* Currently uses only anonymized PCA features (`V1` to `V28`) 
* Model is trained on static data 
* No database or user authentication implemented

---

## 🙋‍♀️ Author

**Hetvi**
📧 [hetvis.pro@gmail.com](mailto:hetvis.pro@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/hetvi-sodha-pro/)

---
