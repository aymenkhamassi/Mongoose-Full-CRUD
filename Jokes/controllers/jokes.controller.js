const Jokes = require("../models/jokes.model");
console.log(Jokes)


//Read All

module.exports.readALL = (req, res) => {
    Jokes.find()
        .then((allDaJokes) => {
            res.json(allDaJokes)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


//Create

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ Jokes: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

//Update

module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
        .then(updatedJoke => {
            res.json({ Jokes: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


//Read One
           
module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ Jokes: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



//Delete
module.exports.deleteAnExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}
           