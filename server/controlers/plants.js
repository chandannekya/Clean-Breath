const express = require("express");

const { Plant } = require("../models/Plant.model");
const asyncHandler=require("../utilities/asyncHandler")

exports.getPlants = asyncHandler(async (req, res) => {
  const plants = await Plant.find();
  res.status(200).json({
    success: true,
    plants,
  });
});

exports.addPlant = asyncHandler(async (req, res) => {
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
});

exports.getPlantbyName = asyncHandler(async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Plant name is required",
    });
  }

  const plantData = await Plant.findOne({ name });

  if (!plantData) {
    return res.status(404).json({
      success: false,
      message: "Plant not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Plant data retrieved successfully",
    data: plantData,
  });
});
