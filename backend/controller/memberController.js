const memberService =require("./../service/memberService");

const createMember=async (req,res)=>{
    const member=req.body;
       const result=await  memberService.create(member);
       res.status(201).send({
           message:'Project create successfully'
       });
       
}
module.exports=createMember;