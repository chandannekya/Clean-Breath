const express = require("express");

const { Plant } = require("../models/Plant.model");

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json({
      success: true,
      plants,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addPlant = async (req, res) => {
  try {
    const {
      name,
      scientificName,
      otherNames,
      description,
      watering,
      sunlight,
      fertilizer,
      soil,
      temperature,
      difficulty,
      image,
      gases,
      price,
    } = req.body;

    const plant = await Plant.create({
      name,
      scientificName,
      otherNames,
      description,
      watering,
      sunlight,
      fertilizer,
      soil,
      temperature,
      difficulty,
      image,
      gases,
      price,
    });

    res.status(200).json({
      success: true,
      plant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
