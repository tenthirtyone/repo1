const { Logger } = require("node-core-utils");
const logger = new Logger("Middleware");

function logRequest(req, res, next) {
  logger.info(`logRequest`);
  next();
}

app.get('/', function(req, res){
  logger.info('Home page');
});

app.get('/register', function(req, res){
  logger.info('Registration page');
});

app.get('/login', function(req, res){
  logger.info('Login page');
});

module.exports = { logRequest };
