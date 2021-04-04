module.exports = app => {

    const works = require("../controllers/work.controller.js");
    var router = require("express").Router();
    // Create a new work
    router.post("/", works.creates);
    // Retrieve all work
    router.get("/", works.findsAll);

    app.use("/api/works", router);
  };
