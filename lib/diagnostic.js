// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

let fs = require('fs'); // jshint ignore: line

let fileName = process.argv[2];

const sumLines = fs.readFile(fileName, (err, data) => {
  /* your response here */
  if(err){
    console.log(err+': File failed to load. Please check file path.');
  }
  let lines = data.toString().split('\n');
  let sum = 0;
  for(let line in lines) {
    if(lines[line]/1 == lines[line])
    {
      sum += lines[line]/1;
    }
    else {
      console.log('line '+lines[line]+' is not a number');
    }
  }
  console.log('The sum of the numeric lines equals '+sum);
});

module.exports = {
  sumLines,
};
