require("dotenv").config();
const express = require("express");
const port = process.env.DEV_PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hit /bfhl endpoint with a post request</h1>");
});

app.post("/bfhl", (req, res) => {
  const array = req.body.data;
  const responseObj = {
    is_success: true,
    user_id: "abhisek_bhunia_29122000",
    email: "bhuniaabhisek465@gmail.com",
    roll_number: 2011981134,
    numbers: [],
    alphabets: [],
  };
  array.forEach((item) => {
    let num = parseInt(item);
    if (num) responseObj.numbers.push(num);
    else responseObj.alphabets.push(item);
  });
  res.json(responseObj);
});

app.listen(port, (err) => {
  const starterText = err
    ? `Error in starting server`
    : `Server started at port http://localhost:${port}/`;
  console.log(starterText);
});
