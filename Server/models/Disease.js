const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  plantType: {
    type: String,
    required: true
  },
  symptoms: {
    type: [String], // Array of symptoms
    required: true
  },
  cause: {
    type: String
  },
  homeRemedies: {
    type: [String] // Array of home remedies
  },
  medicines: {
    type: [String] // Array of recommended medicines
  },
  image: {
    type: String // Optional: URL to an image
  }
});

const Disease = mongoose.model('Disease', diseaseSchema);
module.exports = Disease;
