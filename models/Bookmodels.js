const mongoose = require("mongoose");

const booksmodels = new mongoose.Schema({
   image:String,
    name: String ,
    author: String ,
    price: Number ,
    quantity: Number ,
    category: String ,
    language: String ,
    description: String 
});

const Books = mongoose.model("book", booksmodels) ;

module.exports = Books ;