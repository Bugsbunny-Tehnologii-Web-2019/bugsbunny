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

class Member extends Sequelize.Model { }
Member.init({
    id_member:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
    
    
},{
    sequelize,
    modelName:'members'
})

class Project extends Sequelize.Model { }
Project.init({
    id_project:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        
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
    },
    
},{
    sequelize,
    modelName:'users'
});


class Bug extends Sequelize.Model{}
Bug.init({
    id_bug:{
        type:Sequelize.INTEGER,
        primaryKey:true,
     
        autoIncrement:true
        
    },
    link_commit:{
        type:Sequelize.STRING,
        allowNull:false
    },
    priority:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    severity:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'bugs'
})

User.sync({force:true});
Project.sync({force:true});
Member.sync({force:true});
Bug.sync({force:true});


//Project.hasMany(User,{foreignKey:'id_project',foreignKeyConstraint:true});
Project.hasMany(Member,{foreignKey:'id_project',foreignKeyConstraint:true});
User.hasMany(Member,{foreignKey:'id_user',foreignKeyConstraint:true});
Project.hasMany(Bug,{foreignKey:'id_project',foreignKeyConstraint:true});
module.exports={
    sequelize,
    User,
    Project,
    Member,
    Bug,
   
    
}