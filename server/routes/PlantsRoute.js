const express = require("express");

const { getPlants, addPlant, getPlantbyName } = require("../controllers/plants");

const router = express.Router();

router.get("/getAllplants", getPlants);
router.post("/addPlant", addPlant);
router.get("/getplant", getPlantbyName);
module.exports = router;
