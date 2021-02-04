
const Workout = require("../models/workout.js");
const app = require("express").Router()

//get workouts
app.get("/api/workouts", (req, res) => {
    Workout.find().then(workout => {
        res.json(workout);
    }).catch(err => {
        res.json(err);
    });
});

//create workouts
app.post("/api/workouts", (req, res) => {
    Workout.create({}).then((workout => {
        res.json(workout);
    })).catch(err =>{
        res.json(err);
    });
});

//add excersise
app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    console.log(params)

    Workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises: body}},
    ).then(workout => res.json(workout)).catch(err =>{
        res.json(err);
    });
});

//get in range
app.get("/api/workouts/range", (req, res) => {
    Workout.find().then(workout => {
        console.log(workout);
        res.json(workout);
    }).catch(err => {
        res.json(err);
    })
})

module.exports = app;