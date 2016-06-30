var fs = require("fs");
var contentTypes = require("./contentTypes");
var HTML_INDEX = require("./html/index").html;
var HTML_404 = require("./html/404").html;

function getResponseInfo(routeResult) {
    console.log("Result path: " + routeResult);

    var status = 200;
    var content = "";
    var contentType = "text/html";
    if (routeResult == "htmlIndex") {
        content = HTML_INDEX;
    } else if (routeResult == "html404") {
        status = 404;
        content = HTML_404;
    } else {
        content = fs.readFileSync(routeResult);
        contentType = getContentType(routeResult);
    }
    return {
        "status": status,
        "contentType": contentType,
        "content": content
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

exports.getResponseInfo = getResponseInfo;