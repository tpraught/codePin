// Requiring models
// =============================================================
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all pins
  app.get("/api/pins", function(req, res) {
    
    db.Todo.findAll({}).then(function(dbPin) {
      res.json(dbPin);
    });
  }); // end of get

}; //end of export
