const express = require("express");
const mongoose = require("mongoose");

let app = express ();

// connection To DB
async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/Shopping_Devices');
    if (!connection) {
    console.log('no connect')
    } else {
    console.log('connected to DB...')
   }}
connect();


//schema-1
const clientSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Address : String,
    Phone : String,
    Government : String
});

//convert Schema to model (class)
//model-1
let clientModel = new mongoose.model("Clients", clientSchema);

//schema-2
const orderSchema = new mongoose.Schema({
    Name_Appliance : String,
    Brand : String,
    Color : String,
    Description : String,
    Num_Order : Number,
    Date : String,
    Time : String,
    Price : String,
    Branch : String
});

//convert Schema to model (class)
//model-2
let orderModel = new mongoose.model("Orders", orderSchema);

let firstClient = new clientModel({
    Name : "Yasmin Ibrahim",
    Email : "yasmin152@gmail.com",
    Address : "Faqous",
    Phone : "01127954264",
    Government : "Alsharqia"
}).save();

let secondClient = new clientModel({
    Name : "Saif Al-Din Alaa",
    Email : "Saif163@gmail.com",
    Address : "Alsheikh Zayed",
    Phone : "01167894523",
    Government : "Ismailia"
}).save();

let thirdClient = new clientModel({
    Name : "Mustafa Abbas",
    Email : "Mustafa174@gmail.com",
    Address : "Port Fouad",
    Phone : "01012345678",
    Government : "Port Said"
}).save();

let fourthClient = new clientModel({
    Name : "Islam Osama",
    Email : "Islam185@gmail.com",
    Address : "Elsalame",
    Phone : "01098765432",
    Government : "Suez"
}).save();

let fifthClient = new clientModel({
    Name : "Shehab Ahmed",
    Email : "Shehab186@gmail.com",
    Address : "Helwan",
    Phone : "01243215678",
    Government : "Cairo"
}).save();

let sixthClient = new clientModel({
    Name : "Ahmed Souliman",
    Email : "Ahmed197@gmail.com",
    Address : "Faisal",
    Phone : "01567984532",
    Government : "Giza"
}).save();

/////////////////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////

let firstOrder = new orderModel({
    Name_Appliance : "Blender",
    Brand : "Tornado",
    Color : "Black",
    Description : "TB-600/2L Blender and 2 Grinders Black 1.5",
    Num_Order : 1,
    Date : "5/1/2024",
    Time : "5pm",
    Price : "1350L.E",
    Branch : "Hyper One Market"
}).save();

let secondOrder = new orderModel({
    Name_Appliance : "Screen",
    Brand : "Toshiba",
    Color : "Black",
    Description : "Toshiba 50 inch 4k smart screen",
    Num_Order : 1,
    Date : "3/30/2023",
    Time : "8pm",
    Price : "14450L.E",
    Branch : "Raneen Company"
}).save();

let thirdOrder = new orderModel({
    Name_Appliance : "Water Heater",
    Brand : "Fresh",
    Color : "White",
    Description : "Fresh white water heater, 80 liters",
    Num_Order : 2,
    Date : "15/2/2024",
    Time : "12pm",
    Price : "6600L.E",
    Branch : "Kenwood Electrical Appliances Company"
}).save();

let fourthOrder = new orderModel({
    Name_Appliance : "Screen",
    Brand : "Samsung",
    Color : "Black",
    Description : "Samsung smart screen 43 inches with built-in receiver and remote control, black HD 4k",
    Num_Order : 2,
    Date : "1/1/2024",
    Time : "6pm",
    Price : "16000L.E",
    Branch : "Samsung Company"
}).save();

let fifthOrder = new orderModel({
    Name_Appliance : "Conditioner",
    Brand : "Sharp",
    Color : "Silver",
    Description : "Sharp 1.5 HP split air conditioner, cold, inverter and plasma cluster feature, silver",
    Num_Order : 1,
    Date : "7/3/2024",
    Time : "6pm",
    Price : "26000L.E",
    Branch : "Abdul Aziz Street"
}).save();

let sixthOrder = new orderModel({
    Name_Appliance : "Laptop",
    Brand : "DELL",
    Color : "Beige",
    Description : "DELL laptop G15-5511 Gaming-Core i5 11260H-8G RAM-512G SSD",
    Num_Order : 1,
    Date : "3/3/2024",
    Time : "3pm",
    Price : "34750L.E",
    Branch : "Computer Market, Shebin El-Koum Branch"
}).save();

///////////////////////////////////////////////////////

app.listen(8001, function(){
    console.log("I am listening in port 8001");
})

