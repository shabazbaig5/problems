const mysql = require('mysql');


const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'ethanHunt@123',
  database:'usersdata'
});


getConnection = () => {

  return connection;

}


module.exports = getConnection;