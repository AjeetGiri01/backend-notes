const express = require("express"); //fuction
const app = express(); //store the value
// console.dir(app);

let port = 8000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic response");

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });
    
//     let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>apple</li></ul>";
//     res.send(code);
// });


app.get("/", (req, res) => {
    res.send("hello, I am root");
});
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });
// // app.get("*", (req, res) => {
// //     res.send("this path does not exist");
// // });

// app.post("/", (req, res) => {
//     res.send("you sent a post reques to root");
// });


//path parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    // console.log(req.params);
    // res.send(`welcome to the page of ${username}`);
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});

//QUERY STRINGS
app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});
