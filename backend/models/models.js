const configuration  = require('./../config/configuration.json');
const Sequelize = require('sequelize');

const DB_NAME = configuration.database.database_name;
const DB_USER = configuration.database.username;
const DB_PASS = configuration.database.password;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection success!');
}).catch(err => {
    console.log(`Database connection error: ${err}`);
});





class User extends Sequelize.Model { }
User.init({
    id_user:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    role:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'users'
});
class Project extends Sequelize.Model { }
Project.init({
    id_project:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    link:{
        type:Sequelize.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'projects'
})


User.sync({force:true});
Project.sync({force:true});
Project.belongsTo(User);
Project.hasMany(User);

module.exports={
    sequelize,
    User,
    Project
    
}
