
let obj = {
  a : 2,
  b : 3,
  fun : function(){
    console.log(this);
  }
}

// console.log(obj.fun());



let arr = [1,2,3,4];
let arr2;
arr2 = arr.map((num) => {
  console.log(num * 2);
  return num*2;
});


// fun = () => {

  
  let obj2 = {
    name : 'ethan',
    last : 'hunt',
    jib : 'web developer'
  };

  // return obj;

// }



let { name, last } = obj2;

console.log(obj2['name']);

console.log(`${name} ${last}`);




console.log(arr);
console.log(arr2);


// var output = (function(X)
// {
// Delete X;
// return X;
// }
// )(0);
// console.log(output);
console.log('-----------------------------------------------------------');

var employee =
{
company: 'xyz'
}
var emp1 = Object.create(employee);
console.log(emp1);
delete emp1.company;
console.log(emp1);
console.log('and');
console.log(emp1.company);

console.log('-----------------------------------------------------------');

let person = {

  name : 'ethan',
  last : 'hunt',
  first : function() {

    console.log(this.name);

  }

}

person.second = function(){
  console.log(this.last);
}

person.first();

person.second();



let Student = function(name,roll,interest){

  this.name = name;
  this.roll = roll;
  this.interest = interest;

  // console.log(this);
}



let student1 = new Student('ethan', '1234', 'javascript');
console.log(student1);




Student.prototype.fun = () => {

  console.log('Hey this is added');

}

console.log('[[[[[]]]]');
console.log(student1);


student1.fun();





let x;

console.log(`x before declaring :${x}`);  




x = 5;



console.log(`x after defining :${x}`)



console.log('////////////////////////////////////////////////////////////////////');

console.log(y);

var y;


var sayHello = function () {
  function hello () {
    console.log('Hello!')
  }
  
  hello()
  
  function hello () {
    console.log('Hey!')
  }
}



sayHello();
// sayHello();

// function sayHello () {
//   function hello () {
//     console.log('Hello!')
//   }
  
//   hello();
  
//   var hello = function () {
//     console.log('Hey!')
//   }


//   hello();
// }


console.log('.......................................................................');


let b = {
  a : 1,
  b : 2
}


let a = {
  a : 1,
  b : 2
}


let brProperty = Object.getOwnPropertyNames(b);
let arProperty = Object.getOwnPropertyNames(a);

console.log(brProperty);
console.log(arProperty);

console.log(brProperty == arProperty);



let arr1 = [1,2,3];

let arr3 = [1,2,3];


console.log(arr1===arr3);


let demo2 = [1,2,3];

// let demoArray = [1,2,3,4,5, ...demo2];


performAction = (arr) => {

  // console.log(a);
  // console.log(b);
  // console.log(c);
  console.log(arr);

  let args = Array.prototype.slice.call(arguments);

  console.log(args.indexOf(1));
  console.log(Math.max(...arr));
  

}


performAction(demo2);




console.log('______________________________________________________________________________');


function Player(name, game){

  this.name = name,
  this.game = game

};


function Name(name, game,age){
  Player.call(this, name, game);
  
  this.age = age;
}



let name2 = new Name('ethan','football',21);

console.log(name2);

console.log('--------------------------------------------------------------------------------');

let o = {
  name : 'ethan'
}


let p = {
  name :'hunt'
}



function greet(){

  console.log(this.name);
}




greet.call(o);

greet.call(p);






var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

let unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());


console.log("================================================================================");


delay = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a test");
    }, 3000);
  });

}


delay().then( (result) => {

  console.log("After 3 seconds " + result);

}).then((result) => {

    throw new Error("My own error");

}).catch((err) => {
  console.log(err.message);
  return "error resovled";
}).then((result) => {
  console.log(result);
});

console.log("hey");



fetchDetails = () => {


  
  let dbDetails = {
    name : 'ethan',
    last : 'hunt',
    db : 'details'
  };

  return new Promise((resolve, reject) => {

    setTimeout( () => {
      resolve(dbDetails);
    }, 3000);
  });



  // return dbDetails;

}



getDbDetails = async () =>{

  console.log('waiting for the db details');

  let dbDetails = await fetchDetails();

  console.log(dbDetails);
 

  // dbDetails.then( result => console.log(result));
  
}



getDbDetails();


const fs = require('fs');

const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const readStream = fs.createReadStream('./test2.txt');

const writeStream = fs.createWriteStream('./dada.txt');



readStream.on('data', (data) => {

  console.log(data.toString());
  writeStream.write(data);


});



// readFile('./testing.txt').then((result) => {
  
// });



// Promise.all([
//     // writeFile('test3.json', "{'key': 'qwerty'}"),
//     writeFile('test2.txt', "Hey I am agent Hunt, special agent with MI6"),
//     writeFile('test4.txt','Hey I am Ethan Hunt, I am agent with the FBI'),
//   ]).then((result) => {
//     // console.log(result);
//     console.log("Done writing files");

//   });