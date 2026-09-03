const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     return next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

//logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

//authenticate
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED");
    throw new Error("ACCESS DENIED");
});

// app.get("/wrong", (req, res) => {
//     abcd = abcd;
// });

app.get("/api", (req, res) => {
    res.send("data");
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


