const express=require("express");
const createUser=require("./../controller/usercontroller");
const createProject=require("./../controller/projectController");
const createBug=require("./../controller/bugController");
const createMember=require("./../controller/memberController");
const router=express.Router();



router.post('/user',createUser);
router.post('/project',createProject);
router.post('/bug',createBug);
router.post('/member',createMember);

module.exports=router;