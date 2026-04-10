const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{type:String,require:[true,"Please add the contact name"]},
    email:{type:String,require:[true,"Please fill the email address"]},
    phone:{type:Number,require:[true,"Plese fill the Phone number"]}
})

module.exports = mongoose.model("Contact",contactSchema);