const Event = require("../model/event")

exports.getEvent = async (req,res) => {
    try {
      const data = await Event.find().populate("user").populate("club");
      return res.json({errors:false,data:data})  ;
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
};

exports.addEvent = async (req,res) => {
    try {
        const data = await Event.create(req.body);
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
};

exports.updateEvent = async (req,res) => {
    try {
        const data = await Event.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.deleteEvent = async (req,res) => {
    try {
        const data = await Event.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

