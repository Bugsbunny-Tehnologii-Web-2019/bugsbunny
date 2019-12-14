const express=require("express");
const {createUser, getAllUsers}=require("./../controller/usercontroller");
const {createProject, getAllProjects}=require("./../controller/projectController");
const {createBug,getAllBugs}=require("./../controller/bugController");
const {createMember,getAllMembers}=require("./../controller/memberController");
const router=express.Router();



router.post('/user',createUser);
router.post('/project',createProject);
router.post('/bug',createBug);
router.post('/member',createMember);

router.get('/users',getAllUsers);
router.get('/projects',getAllProjects);
router.get('/bugs',getAllBugs);
router.get('/members',getAllMembers);

module.exports=router;