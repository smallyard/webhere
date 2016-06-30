var http = require("http");
var fs = require("fs");
var router = require("./router");
var contentTypes = require("./contentTypes");

function start() {
    function onRequest(request, response) {
        var filePath = router.route(request.url);
        var reponseInfo = getReponseInfo(filePath);
        response.writeHead(reponseInfo.status, {"Content-Type": reponseInfo.contentType});
        response.write(reponseInfo.content);
        response.end();
    }

    http.createServer(onRequest).listen(9000);
    console.log("Server has started.");
    console.log("Server address: http://127.0.0.1:9000");
}

function getReponseInfo(filePath) {
    console.log("Result path: " + filePath);

    var status = 200;
    if (filePath == "../src/404.html") {
        status = 404;
    }
    return {
        "status": status,
        "contentType": getContentType(filePath),
        "content": fs.readFileSync(filePath)
    };
}

function getContentType(filePath) {
    var suffix = "";
    var pointIndex = filePath.lastIndexOf(".");
    if (pointIndex != -1) {
        suffix = filePath.substr(pointIndex);
    }
    if (contentTypes.hasOwnProperty(suffix)) {
        return contentTypes[suffix];
    } else {
        return contentTypes[".*"];
    }
}

exports.start = start;