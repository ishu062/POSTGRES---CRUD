module.exports = (sequelize, Sequelize) => {
    const Work = sequelize.define("work", {
      dates: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      mobile:{
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      }
    });

    return Work;
  };
