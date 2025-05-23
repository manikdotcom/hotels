//console.log('server is runing')
//1 f
//function fun(a, b){
  //  return a + b
//}

//2 f
// var add = function(a,b)
// {
//     return a + b
// }

//3 f
//var add = (a, b) => {return a + b}

//4 f
// var add =(a, b) => a+b;
// var result = add(21,70);
// console.log(result);

//5
//auto run
//  (function(){
//      console.log('mmm');
//  })();

 //6 callback
//  function callback(){
//   console.log('print now')
//  }
//  const add = function(a, b, callback){
//   var result = a + b;
//   console.log('result' +result);
//   callback();
//  }
//  add(3,4, callback);


 //7

//  const add = function(a, b, printn){
//   var result = a + b;
//   console.log('result' +result);
//   printn();
//  }

 //add 1
//  add(2,3, function(){
//   console.log('add completed');
//  });

//add2
 //add(2,3, () => console.log('add complete'));


 //8
 var  fs = require('fs');
 var os = require('os');

 var user = os.userInfo();
 console.log(user);

 fs.appendFile('greeting.txt', 'h i ' + user.username + '! \n', () => {
  console.log('file is created');
 });

 //console.log(os);

 //9
 const notes = require('./notes.js');
 var _ =require('lodash');
 console.log('server file')

 var age = notes.age;
 var result = notes.addNumber(age+18, 10);
 console.log(age);
 console.log('result is now ' + result);

 var data =['person', 'person2', 1, 2,1, 2, 'name', 3];
 var filter = _.uniq(data);
 console.log(filter);
 console.log(_.isString('printt'));
 console.log(_.isString(10));