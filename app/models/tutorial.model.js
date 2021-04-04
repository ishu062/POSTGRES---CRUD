module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    job: {
      type: Sequelize.STRING
    },
    mobile:{
      type: Sequelize.STRING
    },
    email:{
      type: Sequelize.STRING
    },
    place: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
