const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "shadhvi",
        addresses: [
            {
                location: "221b street",
                city: "London",
            },
        ],
    });

    user1.addresses.push({location: "sec-07 2nd street", city: "Bahadurgarh"});
    let result = await user1.save();
    console.log(result);
};

addUsers();
