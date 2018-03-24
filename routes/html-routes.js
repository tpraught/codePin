// Requiring models
// ===============================================================================================
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signUp");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // GET route for getting all pins.
  // ==========================================================================================
  app.get("/members", isAuthenticated, function (req, res) {
    db.Pin.findAll({}).then(function (dbPin) {
      return res.render("index", {pins: dbPin});
    });
  });

  // Rending the Edit page
    // GET rotue for retrieving a single pin.
    // ===============================================================================================
    app.get("/edit/:id", function (req, res) {
      db.Pin.findOne({
              where: {
                  id: req.params.id
              }
          })
          .then(function (dbPin) {
              res.json(dbPin);
              return res.render("edit", {pin: dbPin})
          });
  });

  // Rendering the About page
  app.get("/about", function (req, res) {
    res.render("aboutPage");
  });

};