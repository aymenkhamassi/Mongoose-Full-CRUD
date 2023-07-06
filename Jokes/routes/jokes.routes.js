const JokesController = require("../controllers/jokes.controller");
console.log("jokercontroller is :",JokesController)

module.exports = (app) =>{
    app.get("/api/jokes",JokesController.readALL)
    app.post("/api/jokes",JokesController.createNewJoke)
    app.put("/api/jokes/:id",JokesController.updateExistingJoke)
    app.get("/api/jokes/:id",JokesController.findOneSingleJoke)
    app.delete("/api/jokes/:id",JokesController.deleteAnExistingJoke)
}