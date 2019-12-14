const bugService =require("./../service/bugService");

const createBug=async (req,res)=>{
    const bug=req.body;
    if(bug.link_commit&&bug.priority&&bug.severity&&bug.description){
       const result=await  bugService.create(bug);
       res.status(201).send({
           message:'Bug create successfully'
       });
       
    }else{
        res.status(400).send({
            message:'Invalid bug payload.'
        })
    }
}
module.exports=createBug;