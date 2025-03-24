const http = require("http");
const exp = require("express");
const app = exp();

const server = http.createServer(app);
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

app.get("/", (req, res) => {
  res.send("Hello World");
} );


server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
