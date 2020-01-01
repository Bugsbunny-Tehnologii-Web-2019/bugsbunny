const express=require("express");

const { createUser, 
        getAllUsers, 
        deleteUser, 
        authenticateUser
    } = require("../controller/userController");
const { createProject, 
        getAllProjects, 
        deleteProject,
        getAllProjectsForUser
    } = require("../controller/projectController");
const { createBug,
        getAllBugs, 
        deleteBug
    } = require("../controller/bugController");
const { createMember,
        getAllMembers, 
        deleteMember
    } = require("../controller/memberController");

const router=express.Router();

router.get('/users',getAllUsers);
router.get('/users/:id/projects', getAllProjectsForUser);
router.post('/user',createUser);
router.delete('/users/:id', deleteUser);

router.get('/projects',getAllProjects);
router.post('/project',createProject);
router.delete('/projects/:id', deleteProject);

router.get('/bugs',getAllBugs);
router.post('/bug',createBug);
router.delete('/bugs/:id', deleteBug);

router.get('/members',getAllMembers);
router.post('/member',createMember);
router.delete('/members/:id', deleteMember);

router.post('/authenticate', authenticateUser);

module.exports=router;