const express = require("express");
const dotenv = require('dotenv')
const app = express();
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require('./config/mongoose-connection');
const flash = require("connect-flash");
const expressSession = require("express-session")

const usersRouter = require("./routes/usersRouter");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index")

// require("dotenv").config();/
dotenv.config();
connectDB()

// const db = require("./config/mongoose-connection");
const { connect } = require("http2");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET || "defaultSecret",
}))
app.use(flash());

app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000)