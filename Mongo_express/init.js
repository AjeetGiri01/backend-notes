const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "tony",
        to: "peter",
        msg: "hi how are u.?",
        created_at: new Date(),
    },
    {
        from: "ajeet",
        to: "aman",
        msg: "ka ho ka haal ba?",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "priyanshu",
        msg: "ghar aao chappal khilaungi",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);



