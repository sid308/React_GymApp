const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defines structure
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//export model
module.exports = mongoose.model("Workout", workoutSchema);
