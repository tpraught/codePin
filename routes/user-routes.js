// Requiring models
// ===============================================================================================
var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json("/");
    });

    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/login");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });


};