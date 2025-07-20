// FraudForm.js
import React, { useState } from "react";

const initialFormData = {
  Time: 406.0,
  V1: 1.19185711131486,
  V2: 0.26615071205963,
  V3: 0.16648011335321,
  V4: 0.44815407846091,
  V5: 0.06001764928222,
  V6: -0.08236080881556,
  V7: -0.07880298333231,
  V8: 0.08510165491481,
  V9: -0.25542512810918,
  V10: -0.1669744140046,
  V11: 1.61272666105479,
  V12: 1.06523531137284,
  V13: 0.48909501589608,
  V14: -0.14377229644152,
  V15: 0.63555809325824,
  V16: 0.46391704102217,
  V17: 0.41838051942155,
  V18: 0.00232934596873,
  V19: 1.26984205576673,
  V20: 0.20163410528339,
  V21: 0.21940416630321,
  V22: 0.13391277266972,
  V23: 0.09925621645954,
  V24: -0.00898309914322,
  V25: 0.01472416919249,
  V26: 0.34126198001926,
  V27: 0.09118808255457,
  V28: 0.02149176962018,
  Amount: 149.62
};

function FraudForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Prediction failed:", error);
      setResult({ error: "Server error or connection issue." });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Credit Card Fraud Detection</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {Object.keys(formData).map((field) => (
            <div key={field} className="col-md-4 mb-3">
              <label className="form-label">{field}</label>
              <input
                type="number"
                step="any"
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Check
        </button>
      </form>

      {result && (
        <div className="mt-4 alert alert-info">
          {result.error ? (
            <div>Error: {result.error}</div>
          ) : (
            <div>
              <strong>Prediction:</strong> {result.prediction} ({result.message}
              )<br />
              <strong>Probability:</strong>{" "}
              {result.probability?.[1]?.toFixed(4)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FraudForm;
