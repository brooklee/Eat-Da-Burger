//Set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

var PORT = process.env.PORT || 8081;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);


app.listen(PORT);

var response;
var statusCode;
const fetchOptions = {
    agent: new http.Agent({ keepAlive: true }),
    timeout: 5000,
};
//
// ...setup code for our request...

    response = await fetch(url, fetchOptions).catch(catchError);
statusCode = response.status;

...other code looking for errors...

// retry once for timeouts
if (statusCode === 503) {
    console.error('RETRY', url);
    response = await fetch(url, fetchOptions).catch(catchError);
    statusCode = response.status;
}

