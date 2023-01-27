const express = require("express");

const app = express();

const port = 8000;

// use express router middleware
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`App listening on port ${port}`);
});
