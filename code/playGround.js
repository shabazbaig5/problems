const getConnection = require('../db/db.js');
const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4003;
const os = require('os');

console.log("Locked and loaded");


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
// const numCPUs = os.cpus().length;

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log("Listening to " + PORT);
})
// let str = os.userInfo();

// console.log(str);

// console.log(numCPUs);



// const server = http.createServer((req, res) => {

//   res.writeHead(200,{'Content-Type': 'text/plain'});

//   res.end('Request served');
// });


// server.listen(PORT, '127.0.0.1', () => {
//   console.log("Listening to the " + PORT);
// });




// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   console.log("match " + match);
//   console.log("Offset " +offset);
//   console.log("String " + string);

//   console.log("p1 is " +p1)
//   console.log("p2 is " +p2)
//   console.log("p3 is " +p3)
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

// let str = 'baba'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

// console.log(newString);

// console.log(str);

// replace = (str) => {

//   str.replace();

// }



// let strng = "I am ethan and ethan is an agent with FBI";



// replace = (str, callback) => {

//   process.nextTick(() => {

//     callback(str.replace(/ethan/i, 'hunt'));

//   });
  

// }


// hidden = (line) => {
//   console.log(line);
// }

// replace(strng, hidden);

// console.log("end");





// console.log(updatedStrng);

// display = (seconds, callback) => {

//   setTimeout(callback, seconds*1000);

// }


// display(2, () => {

//   console.log("After 2 seconds");

//   display(1, () => {
//     console.log("After 3 second");
//     display(1, () => {
//       console.log("After 4 seconds");
//     })
//   });

// });




getDbCreds = () => {

  
  return new Promise((resolve, reject) => {

      let dbObj = {
        name : 'ethan',
        password : 'hunt@123',
        db : 'mysq@localhost',
        port : 3030
      };

      setTimeout(() => {
        resolve(2);
      }, 1000);
      // throw Error("There is some error");
     
      // setTimeout(resolve(dbObj) , 3000);
  });

}


let dbCreds = getDbCreds();

// console.log(dbCreds);

dbCreds.then((result) =>{

  console.log(result);
  return result;


}).then((result) => {

  // console.log(result);
  return result + 2

}).then((result) => {
  console.log(result);
  throw new Error("There something fishy");
}).catch((err) => {

  console.log(err);
  console.log("error fixed");
  return 2;

}).then((result) => {


  console.log(result);
  return result;
  
  
}).then((result) => {

  console.log(result);

}).catch((err) => {

  console.log(err);
  console.log("error fixed");

});


console.log('This is the end');







displayDbDetails = async() => {

  let connection = getConnection();

  return new Promise((resolve, reject) => {

    connection.query('Select * from events', (err, rows, columns) => {

      if(err){
  
        console.error(err);
  
      }else{
  
        // console.log(rows);
        
        resolve(rows);
        
  
      }
  
    })
  })
  // console.log(connection);

}


// let rows = displayDbDetails(); 


// rows.then((result) => {
//   console.log("Rows are as follows");
//   console.log(result);
// })