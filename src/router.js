var fs = require("fs");
function route(path) {
    console.log("About to route a request for " + path);
    if (path == "/") {
        return "../src/index.html";
    } else {
        var path = "." + path;
        if (fs.existsSync(path) && fs.statSync(path).isFile()) {
            return path;
        } else {
            return "../src/404.html";
        }
    }
}

exports.route = route;