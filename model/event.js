const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String
    },
    date:{
        type:Date,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    },
    club:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"club"
    }
},{timestamps:true});

module.exports = mongoose.model("event",eventSchema);