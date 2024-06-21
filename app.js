const express = require("express");
const app = express();                     // Creates an instance of Express.
const cookieParser = require("cookie-parser");  // Middleware for parsing cookies.
const path = require("path");                   //  Node.js module for handling file paths.
const ownnersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/mongooseConnection");

app.use(express.json());                          // Middleware to parse JSON bodies of requests.
app.use(express.urlencoded({ extended: true}));   // Middleware to parse URL-encoded bodies of requests, extended version.
app.use(cookieParser());                          // Middleware to parse cookies from the request headers.
app.use(express.static(path.join(__dirname, "public")));  //  Middleware to serve static files from the "public" directory located in the current directory (__dirname).
app.set("view engine", "ejs");  // Sets EJS (Embedded JavaScript) as the view engine for rendering dynamic HTML templates.


app.use("/owners", ownnersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter)

// app.get("/", (req, res) => {
//     res.send("hey");
// });

app.listen(3000);

