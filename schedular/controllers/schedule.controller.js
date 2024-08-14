const db = require("../models");
const Schedule = db.schedules;

// Create and Save a new Schedule
exports.create = (req, res) => {
  const schedule = {
    studentId: req.body.studentId,
    mentorId: req.body.mentorId,
    timeSlot: req.body.timeSlot,
    duration: req.body.duration
  };
  Schedule.create(schedule)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Retrieve all Schedules
exports.findAll = (req, res) => {
  Schedule.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
