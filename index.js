const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const con = require("./connection");
const { Logger } = require("simple-node-logger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;

  con.connect((err) => {
    if (err) {
      console.log(err.message);

      let sql = "INSERT INTO student(name,email,phoneNumber) values(?,?,?)";
      con.query(sql, [name, email, phoneNumber], (err, result) => {
        if (err) {
          console.log(err.message);
        } else {
          res.send("Student Register successfull" + result.insertId);
        }
      });
    }
  });
});

app.listen(7000);
