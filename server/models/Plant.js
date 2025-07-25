const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  otherNames: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  watering: {
    type: String,
    required: true,
  },
  sunlight: {
    type: String,
    required: true,
  },
  fertilizer: {
    type: String,
    required: true,
  },
  soil: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  gases: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

exports.Plant = mongoose.model("Plant", plantSchema);
