/**
 * Created by jfangchoo on 18/06/2015.
 */
/**
 * A simple example of how to use Waterline with Express
 */
var express = require('express'),
    _ = require('lodash'),
    app = express(),
    Waterline = require('waterline'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    orm = new Waterline();

// read server configuration file
var serverConfig = require('./config/express.js'),
    EXPRESS_PORT = process.env.PORT || serverConfig.port

// Require any waterline compatible adapters here
var waterlineConfig = require('./config/adapters');

require('./config/orm')(orm);

//routes
petRouter = require('./Routes/petRoutes')(app);
petCountRouter = require('./Routes/petCountRoutes')(app);

// Setup Express Application
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/animals/', petCountRouter);
app.use('/animals/', petRouter);

app.get('/', function (req, res) {
    res.send('Welcome  ');
});

// Start Waterline passing adapters in
orm.initialize(waterlineConfig, function (err, models) {
    if (err) throw err;

    app.models = models.collections;
    app.connections = models.connections;

    // Start Server
    app.listen(EXPRESS_PORT, function () {
        console.log("To see saved pets, visit http://localhost:" + EXPRESS_PORT + "/animals/pet");
    });

});
