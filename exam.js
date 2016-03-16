'use strict';

var fs = require('fs');

var apple = {color: "green", weight: 50};

setTimeout()

function fileWriter (filename, obj, cb) {
  this.filename = filename;
  this.obj = obj;
  this.fs = fs;

  this.writeObjectToFile = function (obj) {
    setTimeout(function() {
      this.fs.writeFile(this.filename, JSON.stringify(this.obj), function (err) {
        if (err) {
          console.log(err);
        }
        console.log('done');
      })
    }, 2000),
  };
}

var fileWriter = new fileWriter ('test', apple, )
fileWriter.writeObjectToFile();
