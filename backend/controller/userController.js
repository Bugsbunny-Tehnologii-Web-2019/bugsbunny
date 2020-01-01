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
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.delete(req.params.id);
        res.status(200).send();
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

const authenticateUser = async (req, res) => {
    try {
        const result = await userService.authenticate(req.body);

        if (result != null) {
            res.status(200).send(result);
        } else {
            res.status(401).send();
        }
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

module.exports={createUser,getAllUsers, deleteUser, authenticateUser};
