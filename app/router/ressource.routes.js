module.exports = app => {
    const ressources = require("../controller/ressource.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Ressource
    router.post("/", ressources.create);
  
    // Retrieve all Ressources
    router.get("/", ressources.findAll);
  
    
  
    // Retrieve a single Ressource with id
    router.get("/:id", ressources.findOne);
  
    // Update a Ressource with id
    router.put("/:id", ressources.update);
  
    // Delete a Ressource with id
    router.delete("/:id", ressources.delete);
  
    // delete all  Ressource
    router.delete("/", ressources.deleteAll);
  
    app.use("/api/ressources", router);
  };