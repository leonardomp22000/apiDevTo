const express = require("express");
const usersRouter = require('./routes/users.router')
const authRouter = require('./routes/auth.router')
const postRouter = require("./routes/post.router")
const app = express();


// Middlewares
app.use(express.json())


// Routers 
app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/post", postRouter)

app.get("/", (request, response) => {
  response.json({
    message: "API dev.to",
  });
});

module.exports = app;
