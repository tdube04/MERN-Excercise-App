const router = require('express').Router();
let Excercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Excercise.find()
        .then(excercise => res.json(excercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    username = req.body.username;
    description = req.body.description;
    duration = Number(req.body.duration);
    date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username, 
        description,
        duration,
        date,
    });

    newExcercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;