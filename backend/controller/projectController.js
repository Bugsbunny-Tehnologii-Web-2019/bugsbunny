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
module.exports=createProject;