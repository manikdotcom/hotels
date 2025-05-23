//const { json } = require("express");

const objectToConvert ={
"name": "john", 
"age": 30, 
"city":"delhi"};
const json= JSON.stringify(objectToConvert); // covert object to Json string
console.log(json);
console.log(typeof json);
