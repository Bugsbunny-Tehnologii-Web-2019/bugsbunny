const userService =require("./../service/userService");

const createUser=async (req,res)=>{
    const user=req.body;
    if(user.name&&user.role&&user.email&&user.password){
       const result=await  userService.create(user);
       res.status(201).send({
           message:'User create successfully'
       });
       
    }else{
        res.status(400).send({
            message:'Invalid user payload.'
        })
    }
}
module.exports=createUser;
