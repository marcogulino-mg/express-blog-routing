const express = require("express");
const app = express();
const port = 3000;

//Richiamo assets statici (public)
app.use(express.static("public"));

//Base route
app.get("/", (req, res) => {
  res.type("html").send("<h1>Server del mio blog</h1>");
});

//Server start (port: 3000)
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
