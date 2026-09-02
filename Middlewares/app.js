const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Hi, I am 1st middleware");
    return next();
});

app.use((req, res, next) => {
    console.log("Hi, I am 2nd middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});


