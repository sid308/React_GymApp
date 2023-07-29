const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");

//GEt all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//UPDATE workout
router.patch("/:id", updateWorkout);

//DELETE workout
router.delete("/:id", deleteWorkout);

module.exports = router;
