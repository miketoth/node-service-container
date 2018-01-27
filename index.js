// call the packages we need
var express    = require('express');        // call express  
var app        = express();                 // define our app using express  
var bodyParser = require('body-parser');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// routes our api
var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {  
    res.json({ message: 'hooray! welcome to our api!' });   
});

// all of our routes will be prefixed with /api
app.use('/api', router);

// start the API server
app.listen(port);  
console.log('API runs on port ' + port); 
