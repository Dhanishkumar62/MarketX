const {Schema}=require("mongoose"); //mongoose ka class mile jya gyaa

const HoldingsSchema=new Schema({
   name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,

});


module.exports={HoldingsSchema}