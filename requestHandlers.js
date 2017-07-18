const querystring = require("querystring");
const fs = require("fs");
const formidable = require('formidable');

function start(response) {
    console.log("Request handler 'start' was called.");

    let body = `<html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                    </head>
                    <body>
                        <form action="/upload" enctype="multipart/form-data" method="post">
                            <input type="file" name="upload"></br>
                            <input type="submit" value="Upload file" />
                        </form>
                    </body>
                </html>`;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    let form = new formidable.IncomingForm();
    form.uploadDir = "tmp";

    console.log("about to parse");
    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "tmp/test.png");

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.write(error + "\n");
            response.end();
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'image/png');
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;