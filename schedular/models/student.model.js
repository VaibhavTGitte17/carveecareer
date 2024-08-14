module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      name: {
        type: Sequelize.STRING
      },
      areaOfInterest: {
        type: Sequelize.STRING
      },
      preferredMentorId: {
        type: Sequelize.INTEGER
      }
    });
    return Student;
  };
  