const express = require("express");
const bodyparser = require("body-parser");
let ejs = require("ejs");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/contact", (req, res) => {
  res.render("contact card");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.render("aboutus");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/features", (req, res) => {
  res.render("features");
});

app.get("/features/userdetails", (req, res) => {
  res.render("userdetails");
});

app.get("/features/CheckPassword", (req, res) => {
  res.render("check_Password");
});

app.get("/features/credentials", (req, res) => {
  res.render("credentials");
});
app.get("/features/profiles", (req, res) => {
  res.render("userprofiles");
});

app.listen(3000, () => {
  console.log("Server started");
});
