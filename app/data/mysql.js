const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '420529',
    database: 'mapcache'
});

connection.connect();
function get(reqArry, response, request) {
    let type = reqArry[1];
    let zoom = reqArry[2];
    let x = reqArry[3];
    let y = reqArry[4];

    connection.query(`select Tile from gmapnetcache where Type=${type} and Zoom=${zoom} and X=${x} and Y=${y}`, function (error, results, fields) {
        if (error || !results || !results[0]) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.write(error + "\n");
            response.end();
            return;
        };
        response.statusCode = 200;
        response.setHeader('Content-Type', 'image/png');
        response.write(results[0].Tile, "binary");
        response.end();
    });
}

exports.get = get;