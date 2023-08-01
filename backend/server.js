const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
MONG_URL =
  "mongodb+srv://<Mongo Username>:<Password>@mernapp.nxoqa3r.mongodb.net/?retryWrites=true&w=majority";

// express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes usage
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(MONG_URL)
  .then(() => {
    // listen for request
    app.listen(4000, () => {
      console.log("connected to db and listening to port:4000");
    });
  })

  .catch((error) => {
    console.log(error);
  });
