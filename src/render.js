var fs = require("fs");
var contentTypes = require("./contentTypes");

function getResponseInfo(routeResult) {
    console.log("Result path: " + routeResult.filePath);
    return {
        "status": routeResult.status,
        "contentType": getContentType(routeResult.filePath),
        "content": fs.readFileSync(routeResult.filePath)
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