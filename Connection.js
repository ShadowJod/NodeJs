const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "college",
});

module.exports = conn;

// conn.connect((err) => {
//   if (err) {
//     console.log("Connection Error:", err.message);
//   } else {
//     console.log("Connected");
//   }
//   conn.query("Select * from student", (err, res) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(res);
//     }
//   });
// });

// conn.query("select * from student", (err, res) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(res);
//   }
// });
