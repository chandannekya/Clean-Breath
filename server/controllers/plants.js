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

exports.getPlantbyName = async (req, res) => {
  try {
    // Extract the plant name from the request body
    const { name } = req.query;

    // Check if the name is provided
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Plant name is required",
      });
    }

    // Find the plant by its name in the database
    const plantData = await Plant.findOne({ name });

    // If no plant is found, return a not found message
    if (!plantData) {
      return res.status(404).json({
        success: false,
        message: "Plant not found",
      });
    }

    // Return the plant data if found
    return res.status(200).json({
      success: true,
      message: "Plant data retrieved successfully",
      data: plantData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
