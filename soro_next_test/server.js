// express setting
var express = require('express');
var app = express();
var port = 3000;
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chajae921007!',
    database: 'test'
});
connection.connect();
app.get('/', function (req, res) {
        res.send('Hello World!');
    }
);

app.get('/api/getTestData', function (req, res) {
    console.log('hey')
        connection.query('SELECT * FROM test', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    }
);

app.listen(port, function () {
        console.log('Example app listening on port ' + port + '!');
    }
);