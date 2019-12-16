const express=require("express");
const {createUser, getAllUsers, deleteUser}=require("../controller/userController");
const {createProject, getAllProjects, deleteProject}=require("./../controller/projectController");
const {createBug,getAllBugs, deleteBug}=require("./../controller/bugController");
const {createMember,getAllMembers, deleteMember}=require("./../controller/memberController");
const router=express.Router();



router.post('/user',createUser);
router.post('/project',createProject);
router.post('/bug',createBug);
router.post('/member',createMember);

router.get('/users',getAllUsers);
router.get('/projects',getAllProjects);
router.get('/bugs',getAllBugs);
router.get('/members',getAllMembers);

router.delete('/users/:id', deleteUser);
router.delete('/projects/:id', deleteProject);
router.delete('/bugs/:id', deleteBug);
router.delete('/members/:id', deleteMember);

module.exports=router;