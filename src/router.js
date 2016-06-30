var fs = require("fs");
function route(path) {
    console.log("Origin path: " + path);
    if (path == "/") {
        return "htmlIndex";
    } else {
        path = "." + path;
        if (fs.existsSync(path) && fs.statSync(path).isFile()) {
            return path;
        } else {
            return "html404";
        }
    }
}

exports.route = route;