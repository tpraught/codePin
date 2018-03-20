// Requiring models
// ===============================================================================================
var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {
    
    
    // GET route for getting all pins.
    // ===============================================================================================
    app.get("/", function (req, res) {

        db.Pin.findAll({}).then(function (dbPin) {
            return res.render("index", {pins: dbPin});
        });
    });
    
    
    // GET rotue for retrieving a single pin.
    // ===============================================================================================
    app.get("/pins/:id", function (req, res) {
        db.Pin.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbPin) {
                console.log(dbPin);
                return res.render("read", {pin: dbPin});
            });
    });
    
    

    
}; //end of export