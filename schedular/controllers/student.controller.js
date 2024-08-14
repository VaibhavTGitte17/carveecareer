const db = require("../models");
const Student = db.students;

// Create and Save a new Student
exports.create = (req, res) => {
  const student = {
    name: req.body.name,
    areaOfInterest: req.body.areaOfInterest,
    preferredMentorId: req.body.preferredMentorId
  };
  Student.create(student)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Retrieve all Students
exports.findAll = (req, res) => {
  Student.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
