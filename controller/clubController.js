const Club = require("../model/club");

exports.getClub = async (req,res) => {
    try {
        const data = await Club.find().populate("user");
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.addClub = async(req,res)=>{
    try {
       const data = await Club.create(req.body);
       return res.json({errors:false,data:data}); 
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.updateClub = async (req,res) => {
    try {
        const data = await Club.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:false,message:error.message});
    }
}

exports.deleteClub = async (req,res) => {
    try {
       const data = await Club.findByIdAndDelete(req.params.id);
       return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}