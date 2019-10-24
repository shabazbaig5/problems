const mysql = require('mysql');


const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database:'usersdata'
});


getConnection = () => {

  return connection;

}


module.exports = getConnection;
