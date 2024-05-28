// const mysql = require('mysql');

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "hp"
// });
// module.exports = pool;

require('dotenv').config();
const mysql = require('mysql');
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port:process.env.DB_PORT
});

pool.getConnection((err,co)=>{
  if(err) console.log(err)
  console.log('Conected Succefully')
})
module.exports = pool;