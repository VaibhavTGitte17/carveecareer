module.exports = (sequelize, Sequelize) => {
    const Mentor = sequelize.define("mentor", {
      name: {
        type: Sequelize.STRING
      },
      expertise: {
        type: Sequelize.STRING
      }
    });
    return Mentor;
  };
  