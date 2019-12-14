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
const getAllBugs = async (req, res, next) => {
    try {
        const bugs = await bugService.getAll();
        res.status(200).send(bugs);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}
module.exports={
    createBug,
    getAllBugs
    
};