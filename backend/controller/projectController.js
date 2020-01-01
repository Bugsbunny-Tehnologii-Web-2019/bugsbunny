const projectService =require("./../service/projectService");

const createProject=async (req,res)=>{
    const project=req.body;
    if(project.link&&project.name){
       const result=await  projectService.create(project);
       res.status(201).send({
           message:'Project created successfully'
       });
       
    }else{
        res.status(400).send({
            message:'Invalid project payload.'
        })
    }
};

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await projectService.getAll();
        res.status(200).send(projects);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

const deleteProject = async (req, res) => {
    try {
        await projectService.delete(req.params.id);
        res.status(200).send();
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

const getAllProjectsForUser = async (req, res) => {
    try {
        const userId = req.params.id;

        console.log('User id: ' + userId);

        const result = await projectService.getAllForUser(userId);
        res.status(200).send(result);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

module.exports={createProject, getAllProjects, deleteProject, getAllProjectsForUser};