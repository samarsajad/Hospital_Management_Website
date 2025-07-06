const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Medicine = require('./models/medicines');

dotenv.config();

const medicines = JSON.parse(fs.readFileSync('./data/medicines.json', 'utf-8'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('MongoDB connected. Importing data');
  
  await Medicine.deleteMany(); 
  await Medicine.insertMany(medicines);
  
  console.log(' Medicines imported!');
  process.exit();
}).catch((err) => {
  console.error('Import failed:', err);
});
