const memberService =require("./../service/memberService");

const createMember=async (req,res)=>{
    const member=req.body;
       const result=await  memberService.create(member);
       res.status(201).send({
           message:'Project create successfully'
       });
       
};

const getAllMembers = async (req, res, next) => {
    try {
        const members = await memberService.getAll();
        res.status(200).send(members);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

const deleteMember = async (req, res) => {
    try {
        await memberService.delete(req.params.id);
        res.status(200).send();
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};

module.exports={
    createMember,
    getAllMembers,
    deleteMember
};