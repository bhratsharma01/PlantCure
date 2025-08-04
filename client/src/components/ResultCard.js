import React from 'react';

export default function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h3>🧪 Diagnosis Result</h3>
      <p><strong>Disease:</strong> {result.name}</p>
      <p><strong>Cause:</strong> {result.cause}</p>

      <p><strong>Home Remedies:</strong></p>
      <ul>
        {result.homeRemedies.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <p><strong>Medicines:</strong></p>
      <ul>
        {result.medicines.map((med, i) => <li key={i}>{med}</li>)}
      </ul>

      {result.image && (
        <div>
          <img src={result.image} alt="Disease" />
        </div>
      )}
    </div>
  );
}
