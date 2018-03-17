var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("./config/middleware/isAuthenticated");

var PORT = process.env.PORT || 3000;

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);



// Syncing sequelize models and then starting Express
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App now listening at localhost:" + PORT);
    });
});