const express=require("express");
const createUser=require("./../controller/usercontroller");
const router=express.Router();



router.post('/user',createUser);

module.exports=router;