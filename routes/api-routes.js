// Requiring models
// ===============================================================================================
var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {


    // GET route for getting all pins.
    // ===============================================================================================
    app.get("/api/pins", function (req, res) {

        db.Pin.findAll({}).then(function (dbPin) {
            res.json(dbPin);
        });
    });


    // GET rotue for retrieving a single pin.
    // ===============================================================================================
    app.get("/api/pins/:id", function (req, res) {
        db.Pin.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbPin) {
                res.json(dbPin);
            });
    });


    // GET rotue for returning pins of a specific language
    // ===============================================================================================
    app.get("/api/pins/language/:language", function (req, res) {
        db.Pin.findAll({
                where: {
                    language: req.params.language
                }
            })
            .then(function (dbPin) {
                res.json(dbPin);
            });
    });


    // POST route for saving a new pin.
    // ===============================================================================================
    app.post("/api/pins", function (req, res) {

        db.Pin.create({
            title: req.body.title,
            description: req.body.description,
            language: req.body.language,
            link: req.body.link,
            content: req.body.content
        }).then(function (dbPin) {
            res.json(dbPin);
        });
    });


    // DELETE route for deleting pins.
    // ===============================================================================================
    app.delete("/api/pins/:id", function (req, res) {

        db.Pin.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPin) {
            res.json(dbPin);
        });

    });


    // PUT route for updating pins
    // ===============================================================================================
    app.put("/api/pins", function (req, res) {

        db.Pin.update({
            title: req.body.title,
            description: req.body.description,
            language: req.body.language,
            link: req.body.link,
            content: req.body.content
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPin) {
            res.json(dbPin);
        });
    });



}; //end of export