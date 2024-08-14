module.exports = app => {
    const mentors = require("../controllers/mentor.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", mentors.create);
    router.get("/", mentors.findAll);
  
    app.use('/api/mentors', router);
  };
  