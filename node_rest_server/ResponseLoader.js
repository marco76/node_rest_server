"use strict";

// load the module that manages the filesystem
var fs = require('fs');

function ResponseLoader (name){

    // the content of the file is stored in this variable
    var json;

    // method that load the file on the base of the URL
    ResponseLoader.prototype.load = function(url){
        console.log("requested file: " + url);
        // url: hello -> file: [current directory]/json/hello.json
        fs.readFile( __dirname + '/json' +url+'.json', function (err, data) {
            if (err) {
                console.log('error');
                throw err;
            }
            // the content of the file is assigned to the variable
            json = data;

            console.log(name + " : " +data.toString());
        })
    };

    // give me the json content
    ResponseLoader.prototype.getJson = function (){
        console.log(name + " : return json");

        return json;
    };
}

// this is node.js specific, it is required to expose the local function
module.exports = ResponseLoader;

