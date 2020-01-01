const { User }=require("./../models/models");

const user = { 
    create: async (user)=>{
        try{ 
            const result=await User.create(user);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    delete: async (id) => {
        try {
            return await User.destroy({
                where: {
                    id_user: id
                }
            });
        } catch(err) {
            throw new Error(err.message);
        }
    },
    authenticate: async(payload) => {
        try {
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            });
            
            console.log('Trying to authenticate user: ' + user);

            if (user.password === payload.password) {
                return user;
            }
            
            return null;
        } catch(err) {
            throw new Error(err.message);
        }
    }
    
};
module.exports=user;