const { Member }=require("./../models/models");

const member = { 
    create: async (member)=>{
        try{ 
            const result=await Member.create(member);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const members = await Member.findAll();
            return members;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    delete: async (id) => {
        try {
            return await Member.destroy({
                where: {
                    id_member: id
                }
            });
        } catch(err) {
            throw new Error(err.message);
        }
    }
};

module.exports=member;