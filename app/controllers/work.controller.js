const db = require("../models");
const Work = db.works;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.creates = (req, res) => {
  // Validate request
  if (!req.body.dates) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const work = {
    dates: req.body.dates,
    job: req.body.job,
    mobile: req.body.mobile,
    place: req.body.place
  };
  // Save Tutorial in the database
  Work.creates(work)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findsAll = (req, res) => {
  const dates = req.query.dates;
  var condition = dates ? { dates: { [Op.iLike]: `%${dates}%` } } : null;

  Work.findsAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving works."
      });
    });
};
