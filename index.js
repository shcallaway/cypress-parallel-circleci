const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
