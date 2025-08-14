import React, { useState } from 'react';
import axios from 'axios';

export default function AddDiseaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    plantType: '',
    symptoms: '',
    cause: '',
    homeRemedies: '',
    medicines: '',
    image: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await axios.post('https://plantcure-6gpt.onrender.com/api/diseases/add', {
        ...formData,
        symptoms: formData.symptoms.split(',').map(s => s.trim()),
        homeRemedies: formData.homeRemedies.split(',').map(r => r.trim()),
        medicines: formData.medicines.split(',').map(m => m.trim()),
      });

      setSuccessMsg(response.data.message);
      setFormData({
        name: '',
        plantType: '',
        symptoms: '',
        cause: '',
        homeRemedies: '',
        medicines: '',
        image: ''
      });
    } catch (err) {
      setErrorMsg('Failed to add disease');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Disease</h2>
      <form onSubmit={handleSubmit}>
        <label>Disease Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Plant Type:</label>
        <input type="text" name="plantType" value={formData.plantType} onChange={handleChange} required />

        <label>Symptoms (comma-separated):</label>
        <input type="text" name="symptoms" value={formData.symptoms} onChange={handleChange} required />

        <label>Cause:</label>
        <input type="text" name="cause" value={formData.cause} onChange={handleChange} required />

        <label>Home Remedies (comma-separated):</label>
        <input type="text" name="homeRemedies" value={formData.homeRemedies} onChange={handleChange} required />

        <label>Medicines (comma-separated):</label>
        <input type="text" name="medicines" value={formData.medicines} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />

        <button type="submit">Add Disease</button>
      </form>

      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
}
