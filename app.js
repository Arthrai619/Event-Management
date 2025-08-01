const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const eventRoutes = require("./routes/eventRoutes");
const clubRoutes = require("./routes/clubRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());//Cors Enable

app.get("/",(req,res)=>{
res.send("home");
});

app.get("/about",(req,res)=>{
res.send("about");
});

app.use("/api/event",eventRoutes);
app.use("/api/club",clubRoutes);
app.use("/api/user",userRoutes);



app.listen(process.env.PORT);

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB);
        console.log(res.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
    }
}
db();


