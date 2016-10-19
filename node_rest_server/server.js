"use strict";

var main = function main(){

    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;

    // import the function from the module, specific node.js
    var loaderModule = require('./ResponseLoader.js');
    // create an instance of the prototype
    var loader = new loaderModule("loader");

    function requestService(request, response){
        // url == filename without extension
        var url = request.url;

        // home page called
        if (url=="/"){
            url = "/index";
        }

        // call the method that load the static page
        loader.load(url);

        // prepare the http response
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        // add the JSON content
        response.end(loader.getJson());
    }

    var server = http.createServer(requestService);

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
};
main();

