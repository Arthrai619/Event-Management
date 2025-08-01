const {getClub,addClub,updateClub,deleteClub} = require("../controller/clubController");
const auth = require("../middleware/auth");
const isSuperAdmin = require("../middleware/superadmin")
const route = require("express").Router();

route.get("/",getClub);

route.post("/",[auth,isSuperAdmin],addClub);

route.put("/:id",[auth,isSuperAdmin],updateClub);

route.delete("/:id",[auth,isSuperAdmin],deleteClub);

module.exports = route;
