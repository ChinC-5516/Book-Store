const express = require( "express");
const adminController = require("../controllers/admin-controller")
const addAdmin = require( "../controllers/admin-controller");
const getAdminById = require( "../controllers/admin-controller");
const getAdmins = require( "../controllers/admin-controller");
const adminLogin = require( "../controllers/admin-controller");


const adminRouter = express.Router();

adminRouter.post("/signup", adminController.addAdmin);
adminRouter.post("/login", adminController.adminLogin);
adminRouter.get("/", adminController.getAdmins);
adminRouter.get("/:id", adminController.getAdminById);

module.exports =  adminRouter;
