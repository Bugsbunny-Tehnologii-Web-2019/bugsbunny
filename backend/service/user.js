const { User }=require("./../models/models");

const user = { 
    create: async (user)=>{
        try{ 
            const result=await User.create(user);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    }
    
}
module.exports=user;