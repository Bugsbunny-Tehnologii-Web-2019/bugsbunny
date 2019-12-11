const { sequelize,User,Project,Bug,ProjectBug,Member } = require('./../models/bugsbunny');

const user = {
    create: async (user) => {
        try {
            const result = await User.create(user);
            return result;    
        } catch(err) {
           throw new Error(err.message); 
        }
    // },
    // getAll: async () => {
    //     try {
    //         const products = await User.findAll();
    //         return products;
    //     } catch(err) {
    //         throw new Error(err.message);
    //     }
    // },
    // getByCategory: async (category) => {
    //     try {
    //         const products = await P.findAll({category: category});
    //         return products;
    //     } catch(err) {
    //         throw new Error(err.message);
    //     }
     }
}

module.exports = user;