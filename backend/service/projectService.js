const { Project }=require("./../models/models");

const project = { 
    create: async (project)=>{
        try{ 
            const result=await Project.create(project);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const projects = await Project.findAll();
            return projects;
        } catch(err) {
            throw new Error(err.message);
        }
    }
    
}
module.exports=project;