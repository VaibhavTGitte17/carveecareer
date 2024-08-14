module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
      studentId: {
        type: Sequelize.INTEGER
      },
      mentorId: {
        type: Sequelize.INTEGER
      },
      timeSlot: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      }
    });
    return Schedule;
  };
  