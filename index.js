var http = require("http");
var server = http.createServer(function(req, res) {
    require('./lib')(req, res);
});

server.listen(8080);
console.log("Server is listening on port 8080");