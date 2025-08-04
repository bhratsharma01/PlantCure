// src/Pages/AboutPage.js
import React from 'react';
import './PageStyles.css';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">About PlantCure</h2>
      <p className="page-text">
        PlantCure is an AI-powered web application designed to diagnose plant diseases and offer remedies.
        Our mission is to help farmers and plant lovers keep their plants healthy by providing instant
        and accurate diagnoses.
      </p>
      <p className="page-text">
        Developed using the MERN stack, PlantCure leverages image-based detection, a curated database,
        and expert suggestions to provide meaningful guidance for plant care.
      </p>
    </div>
  );
}
