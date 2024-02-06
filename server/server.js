const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");  // Import the cors middleware
const app = express();
const db = require("./connection");
const port = 5000;
const response = require("./response");// Import the cors middleware

app.use(bodyParser.json());
app.use(cors());

app.get("/connect", (req, res) => {
  const sql = "SELECT * FROM website_kevin";
  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res);
    if (fields?.id) {
      response(200, fields, "Data found", res);
    }
    // console.log(fields)
  });
});

app.post("/connect", (req, res) => {
    const { fullName, shortName, phoneNumber, message } = req.body;
    const sql = `INSERT INTO frienddatas (full_name, short_name, phone_number, message) VALUES ('${fullName}', '${shortName}', '${phoneNumber}','${message}')`;
  
    db.query(sql, [fullName, shortName, phoneNumber, message], (err, result) => {
      if (err) {
        console.error("Error in database query:", err);
        return response(500, "error", "Internal Server Error", res);
      }
  
      if (result.insertId) {
        response(200, result, "Data inserted successfully", res);
        console.log(result);
      } else {
        response(500, "error", "Error inserting data", res);
      }
    });
  });
  
  

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
