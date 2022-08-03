const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, My Server!!");
});

app.get("/getData", (req, res) => {
  const number = req.query.number;

  if (number === "xyz") {
    res.send("Wrong Parameter");
  } else if (isNaN(number) === false) {
    const result =
      ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    res.send(`${result}`);
  } else {
    res.send("Lack of Parameter");
  }
});

app.listen(port, () => {
  console.log("The application is running.");
});
