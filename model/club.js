const mongoose = require("mongoose");
const clubSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    logo: {
        type:String
    },
    user : {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
},{timestamps:true});

module.exports = mongoose.model("club",clubSchema);