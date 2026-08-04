// const express = require("express");
// const app = express();
// const port = 8080;
// const path = require("path");
// import { v4 as uuidv4 } from 'uuid';


import express from "express";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "ajeetgiri",
        content : "I love coding!",
    },
    {
        id : uuidv4(),
        username : "princegiri",
        content : "Hard work is important",
    },
    {
        id : uuidv4(),
        username : "sadhvi",
        content : "I got selected!",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
}); 

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("post request working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});

app.listen(port, () => {
    console.log("listening to port : 8080");
}); 




