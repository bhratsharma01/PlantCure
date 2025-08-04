import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

export default function DiagnoseForm() {
  const [plantType, setPlantType] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [symptomsByPlant, setSymptomsByPlant] = useState({});

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/diseases/all');
        const grouped = {};

        res.data.forEach(d => {
          if (!grouped[d.plantType]) {
            grouped[d.plantType] = new Set();
          }
          d.symptoms.forEach(s => grouped[d.plantType].add(s));
        });

        const converted = {};
        for (let plant in grouped) {
          converted[plant] = Array.from(grouped[plant]);
        }

        setSymptomsByPlant(converted);
      } catch (err) {
        console.error('Failed to load symptoms', err);
      }
    };

    fetchDiseases();
  }, []);

  const handleSymptomChange = (e) => {
    const value = e.target.value;
    setSymptoms((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError('');

    try {
      const res = await axios.post('http://localhost:8000/api/diseases/diagnose', {
        plantType,
        symptoms
      });
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="form-container">
      <h2>Diagnose Your Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>Plant Type:</label>
        <select value={plantType} onChange={(e) => {
          setPlantType(e.target.value);
          setSymptoms([]);
        }}>
          <option value="">-- Select Plant --</option>
          {Object.keys(symptomsByPlant).map((plant) => (
            <option key={plant} value={plant}>{plant}</option>
          ))}
        </select>

        {plantType && symptomsByPlant[plantType] && (
          <>
            <label>Symptoms:</label>
            {symptomsByPlant[plantType].map((symptom) => (
              <div key={symptom}>
                <input
                  type="checkbox"
                  value={symptom}
                  checked={symptoms.includes(symptom)}
                  onChange={handleSymptomChange}
                />
                <span>{symptom}</span>
              </div>
            ))}
          </>
        )}

        <button type="submit">🔍 Diagnose</button>
      </form>

      {result && <ResultCard result={result} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
