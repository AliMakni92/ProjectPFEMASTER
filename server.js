var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var cors = require('cors');
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;




app.use(cors());
// Create a Server
var server = app.listen(8080, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port)
})

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db1 = require("./app/models");
db1.mongoose
  .connect(db1.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  require("./app/router/ressource.routes")(app);

  

