const { Member }=require("./../models/models");

const member = { 
    create: async (member)=>{
        try{ 
            const result=await Member.create(member);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    }
    
}
module.exports=member;