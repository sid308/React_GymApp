const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//GET single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//CREATE workout
const createWorkout = async function (req, res) {
  const { title, load, reps } = req.body;

  //add document to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE workout
const updateWorkout = async (req, res) => {
  const { id } = req.params; //find and store id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//DELETE workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
};
