const mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "ba614281ff3063",
    password: "8ec64b64",
    database: "heroku_cb581b6cdbc1be9"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;