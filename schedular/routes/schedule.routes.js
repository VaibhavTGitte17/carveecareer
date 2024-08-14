module.exports = app => {
    const schedules = require("../controllers/schedule.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", schedules.create);
    router.get("/", schedules.findAll);
  
    app.use('/api/schedules', router);
  };
  