var http = require("http");
var fs = require("fs");
var router = require("./router");
var render = require("./render");
var contentTypes = require("./contentTypes");

function start() {
    function onRequest(request, response) {
        var routeResult = router.route(request.url);
        var responseInfo = render.getResponseInfo(routeResult);
        response.writeHead(responseInfo.status, {"Content-Type": responseInfo.contentType});
        response.write(responseInfo.content);
        response.end();
    }
    http.createServer(onRequest).listen(9000);
    console.log("Server has started.");
    console.log("Server address: http://127.0.0.1:9000");
}

exports.start = start;