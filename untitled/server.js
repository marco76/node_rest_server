"use strict";

var main = function main(){

    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;

    var loaderModule = require('./ResponseLoader.js');
    var loader = new loaderModule("loader");

    function requestService(request, response){
        var url = request.url;
        if (url=="/"){
            url = "/index";
        }
        loader.load(url);
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(loader.getJson());
    }

    var server = http.createServer(requestService);

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
};
main();

