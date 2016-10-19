"use strict";

var fs = require('fs');

function ResponseLoader (name){

    var that = this;
    var json;

    ResponseLoader.prototype.load = function(url){
        console.log("requested file: " + url);
        fs.readFile( __dirname + '/json' +url+'.json', function (err, data) {
            if (err) {
                console.log('error');
                throw err;
            }
            json = data;
            console.log(name + " : " +data.toString());
        })
    };

    ResponseLoader.prototype.getJson = function (){
        console.log(name + " : return json");
        return json;
    };

}

module.exports = ResponseLoader;

