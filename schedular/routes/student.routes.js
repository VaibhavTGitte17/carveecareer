module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", students.create);
    router.get("/", students.findAll);
  
    app.use('/api/students', router);
  };
  