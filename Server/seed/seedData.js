const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Disease = require('../models/Disease');

// Load .env
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected. Seeding data...');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
});

const seedDiseases = async () => {
  try {
    await Disease.deleteMany(); // Clear old data

    await Disease.insertMany([
  {
    name: 'Powdery Mildew',
    plantType: 'Tomato',
    symptoms: ['white powdery spots', 'leaf curling'],
    cause: 'Fungal infection',
    homeRemedies: ['Spray neem oil', 'Mix milk with water and spray'],
    medicines: ['Fungicide-X'],
    image: 'https://example.com/tomato1.jpg'
  },
  {
    name: 'Leaf Spot',
    plantType: 'Tomato',
    symptoms: ['brown spots', 'yellowing leaves'],
    cause: 'Bacterial infection',
    homeRemedies: ['Remove affected leaves', 'Use baking soda solution'],
    medicines: ['Bactrinol'],
    image: 'https://example.com/tomato2.jpg'
  },
  {
    name: 'Early Blight',
    plantType: 'Potato',
    symptoms: ['dark spots', 'leaf drop'],
    cause: 'Fungal spores',
    homeRemedies: ['Copper spray', 'Avoid wet leaves'],
    medicines: ['BlightFix'],
    image: 'https://example.com/potato1.jpg'
  },
  {
    name: 'Late Blight',
    plantType: 'Potato',
    symptoms: ['black lesions', 'wilting'],
    cause: 'Water mold',
    homeRemedies: ['Remove infected plants', 'Improve drainage'],
    medicines: ['Mancozeb'],
    image: 'https://example.com/potato2.jpg'
  },
  {
    name: 'Downy Mildew',
    plantType: 'Cucumber',
    symptoms: ['yellow spots', 'grey mold underside of leaves'],
    cause: 'Fungus-like organism',
    homeRemedies: ['Milk spray', 'Increase air circulation'],
    medicines: ['DownGuard'],
    image: 'https://example.com/cucumber1.jpg'
  },
  {
    name: 'Anthracnose',
    plantType: 'Beans',
    symptoms: ['dark sunken lesions', 'stem rot'],
    cause: 'Fungus',
    homeRemedies: ['Remove infected parts', 'Use clean seeds'],
    medicines: ['Copper-based fungicide'],
    image: 'https://example.com/beans1.jpg'
  },
  {
    name: 'Bacterial Wilt',
    plantType: 'Cucumber',
    symptoms: ['sudden wilting', 'oozing stem'],
    cause: 'Bacteria',
    homeRemedies: ['Solarize soil', 'Remove infected plants'],
    medicines: ['Streptomycin'],
    image: 'https://example.com/cucumber2.jpg'
  },
  {
    name: 'Rust',
    plantType: 'Wheat',
    symptoms: ['orange pustules', 'yellowing'],
    cause: 'Fungal spores',
    homeRemedies: ['Neem spray', 'Burn infected leaves'],
    medicines: ['RustOut'],
    image: 'https://example.com/wheat1.jpg'
  },
  {
    name: 'Stem Rot',
    plantType: 'Onion',
    symptoms: ['soft stem', 'black mold'],
    cause: 'Soil fungi',
    homeRemedies: ['Dry soil', 'Use fungicidal powder'],
    medicines: ['StemFix'],
    image: 'https://example.com/onion1.jpg'
  },
  {
    name: 'Wilt',
    plantType: 'Brinjal',
    symptoms: ['drooping leaves', 'brown stem base'],
    cause: 'Fungus in soil',
    homeRemedies: ['Less watering', 'Use neem cake in soil'],
    medicines: ['Carbendazim'],
    image: 'https://example.com/brinjal1.jpg'
  }
]);


    console.log('Sample diseases inserted successfully!');
    process.exit(); // Exit after success
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1); // Exit with failure
  }
};

seedDiseases();
