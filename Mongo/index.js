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

// User.find({age: {$gt: 47}})
//     .then((res) => {
//         console.log(res[0].name);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// User.findOne()

// User.findById('6a89284b4c98c76c55b5198d')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// User.updateOne({name: "Bruce"}, {age: 49})
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// User.updateMany()

// User.findOneAndUpdate({name: "Bruce"}, {age: 34}, {new: true})
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });


User.deleteOne({name: "Tony"})
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });



// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 43},
// ]).then(res => {
//     console.log(res);
// });

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 42,
// });

// user1.save(); //returns the promise



