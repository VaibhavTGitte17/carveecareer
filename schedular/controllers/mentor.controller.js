const db = require("../models");
const Mentor = db.mentors;

// Create and Save a new Mentor
exports.create = (req, res) => {
  const mentor = {
    name: req.body.name,
    expertise: req.body.expertise
  };
  Mentor.create(mentor)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Retrieve all Mentors
exports.findAll = (req, res) => {
  Mentor.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
