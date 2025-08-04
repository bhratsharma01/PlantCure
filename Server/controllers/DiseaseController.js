
const Disease = require('../models/Disease');

// POST /api/diseases/diagnose
const diagnoseDisease = async (req, res) => {
  const { plantType, symptoms } = req.body;

  try {
    const matchedDisease = await Disease.findOne({
      plantType: plantType,
      symptoms: { $all: symptoms }
    });

    if (!matchedDisease) {
      return res.status(404).json({ message: 'No matching disease found' });
    }

    res.json({
      name: matchedDisease.name,
      cause: matchedDisease.cause,
      homeRemedies: matchedDisease.homeRemedies,
      medicines: matchedDisease.medicines,
      image: matchedDisease.image
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const addDisease = async (req, res) => {
  try {
    const newDisease = new Disease(req.body);
    await newDisease.save();
    res.status(201).json({ message: 'Disease added successfully' });
  } catch (error) {
    console.error("❌ Add Disease Error:", error.message);
    res.status(500).json({ message: 'Failed to add disease', error: error.message });
  }
};

const getAllDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch diseases', error: error.message });
  }
};


module.exports = {
  diagnoseDisease, addDisease, getAllDiseases
};
