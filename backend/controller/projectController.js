const projectService =require("./../service/projectService");

const createProject=async (req,res)=>{
    const project=req.body;
    if(project.link&&project.name){
       const result=await  projectService.create(project);
       res.status(201).send({
           message:'Project create successfully'
       });
       
    }else{
        res.status(400).send({
            message:'Invalid project payload.'
        })
    }
}
const getAllProjects = async (req, res, next) => {
    try {
        const projects = await projectService.getAll();
        res.status(200).send(projects);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}
module.exports={createProject, getAllProjects};