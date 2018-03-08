const mongoose = require("mongoose");
const Phone = require("../models/Phone.js");

mongoose.connect('mongodb://localhost/phone-store')
    .then(console.log("Connected to dB!!"))


const phoneData = [
    { brand: 'Sony ', name: 'Xperia z5 Compact', specs: ["Cool","Top"] },
    { brand: 'Samsung', name: 'S9', specs: ["FullEdgeDisplay","Responsive"] },
    { brand: 'Huawei', name: 'P10', specs: ["Chino"," Barato"] }
  ];

//Limpia la colección de drones

Phone.create(phoneData, (err,result) => {
    console.log("entro a crear")
    result.forEach((phone) => console.log(`El phone ${phone} ha sido agregado exitosamente`));
});