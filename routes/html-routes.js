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

  app.get("/members", isAuthenticated, function (req, res) {
    res.render("index");
  });

  
  // app.get("/login", function(req, res) {
  //   res.render("login");
  // });

  // app.get("/signup", function(req, res) {
  //   res.render("signUp");
  // });
};