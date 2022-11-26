const express = require("express");
const chartController = require("../../controllers/chartController");

const router = express.Router();

//retrieve weekly chart - chart_id, chart_type, chart_date
router.get("/:chartId/:chartTimeframe/:chartDateInfo", chartController.getChart);
/*
//retrieve monthly chart - chart_id, chart_month
router.get("/:workoutId", workoutController.getOneWorkout);

//retrieve year-end chart - chart_id, chart_year
router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);
*/
module.exports = router;