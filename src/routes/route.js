const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const commonMW =require ("../middlewares/commonMiddlewares")


router.get("/basicRoute", commonMW.mid1, userController.basicCode)

module.exports = router;