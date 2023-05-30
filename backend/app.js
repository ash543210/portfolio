const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  console.log(req.body);
  res.send({"Success" : 'success'});
});

app.listen(3001);
