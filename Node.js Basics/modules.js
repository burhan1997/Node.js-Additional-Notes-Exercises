// set it equal to require and this inside is going to be a relative path to whatever file we want to require our import
const { people, ages } = require('./people');


//if we console.log xyz, it is gonna return us an empty object. Because we're not manually telling this file to export any kind of data or properties. how do we do that? we do that by saying module dots exports in the people.js file
console.log(people, ages);

//operating system
const os = require('os');

console.log(os.platform(), os.homedir());
