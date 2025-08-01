const User = require("../model/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

exports.getUser = async (req,res) => {
    try {
        const data = await User.find();
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.addUser = async (req,res) => {
    try {
        const userExists = await User.findOne({email:req.body.email});
        if(userExists) return res.status(500).json({errors:true,message:"User already exists !"});
        
        req.body.password = await bcrypt.hash(req.body.password,10);

        const data = await User.create(req.body);

        return res.json({errors:false,data:data});
        
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.loginUser = async(req,res) =>{
    try {
        const userExists = await User.findOne({email:req.body.email});
        if(!userExists) return res.status(500).json({errors:true,message:"Username or password doesnt exist!"});

        const comparePass = await bcrypt.compare(req.body.password,userExists.password);
        if(!comparePass) return res.status(500).json({errors:true,message:"Username or password is invalid"});

        const token = await JWT.sign({id:userExists._id,role:userExists.role},process.env.SEC)

        return res.json({errors:false,data:{token:token,user:userExists}})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}