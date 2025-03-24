const http = require("http");
const exp = require("express");
const app = exp();
const path = require("path");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

// socket.io setup
io.on("connection", (socket) => {
  console.log("A user connected",socket.id);
  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("received", msg);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
 
app.use(exp.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World"); 
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
