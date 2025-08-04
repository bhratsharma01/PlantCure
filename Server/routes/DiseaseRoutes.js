// routes/DiseaseRoutes.js

const express = require('express');
const router = express.Router(); // ✅ This is the correct usage

const { diagnoseDisease, addDisease, getAllDiseases } = require('../controllers/DiseaseController');

// Route: POST /api/diseases/diagnose
router.post('/diagnose', diagnoseDisease);
router.post('/add', addDisease);
router.get('/all', getAllDiseases);

module.exports = router;
