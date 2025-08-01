const {addEvent,updateEvent,deleteEvent,getEvent} = require("../controller/eventController");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/admin")

const route = require("express").Router();


route.get("/",getEvent);

route.post("/",[auth,isAdmin],addEvent);

route.put("/:id",[auth,isAdmin],updateEvent);

route.delete("/:id",[auth,isAdmin],deleteEvent);

module.exports = route;