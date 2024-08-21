const express = require("express");

const { getPlants, addPlant } = require("../controlers/plants");

const router = express.Router();

router.get("/getAllplants", getPlants);
router.post("/addPlant", addPlant);

module.exports = router;
