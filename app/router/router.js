const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function (app) {

	const controller = require('../controller/controller.js');

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

	app.post('/api/auth/signin', controller.signin);

	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

	app.get('/api/test/member', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
	//app.get("/api/test/members", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard, controller.findAll);
	// Retrieve all members
	app.get("/api/test/members", controller.findAll);
	
	 // Update a User with id
 	app.put("/api/test/members/:id", controller.update);
    // Create a new user
	app.post("/api/test/members/", controller.create);
	app.post("/api/test/members/", )
  
	// Retrieve a single User with id
	app.get("/api/test/members/:id", controller.findOne);
  
	// Delete a User with id
	app.delete("/api/test/members/:id", controller.delete);
	// Delete all Users
	app.delete("/api/test/members/", controller.deleteAll);
	app.get('/api/test/member', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
}