const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 50},
    {name: "Peter", email: "peter@gmail.com", age: 30},
    {name: "Bruce", email: "bruce@gmail.com", age: 43},
]).then(res => {
    console.log(res);
});

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 42,
// });

// user1.save(); //returns the promise



