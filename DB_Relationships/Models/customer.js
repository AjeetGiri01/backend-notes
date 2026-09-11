const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders }});
        console.log(res);
    };
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    // let cust1 = new Customer({
    //     name: "Rahul",
    // });

    // let order1 = await Order.findOne({item: "chips"});
    // let order2 = await Order.findOne({item: "chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let result = await cust1.save();
    // console.log(result);

    let result = await Customer.find({});
    console.log(result);
};

addCustomer();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item: "samosa", price: 12},
//         {item: "chips", price: 10},
//         {item: "chocolate", price: 40},
//     ]);
//     console.log(res);
// };

// addOrders();


const addCust = async () => {
    let newCust = new Customer({
        name: "Karan",
    });

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete('6aa431d012d754874aaefb19');
    console.log(data);
};

// addCust();
delCust();