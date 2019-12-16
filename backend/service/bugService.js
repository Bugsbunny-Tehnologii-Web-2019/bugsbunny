const { Bug }=require("./../models/models");

const bug = { 
    create: async (bug)=>{
        try{ 
            const result=await Bug.create(bug);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const bugs = await Bug.findAll();
            return bugs;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    delete: async (id) => {
        try {
            return await Bug.destroy({
                where: {
                    id_bug: id
                }
            });
        } catch(err) {
            throw new Error(err.message);
        }
    }
};

module.exports=bug;