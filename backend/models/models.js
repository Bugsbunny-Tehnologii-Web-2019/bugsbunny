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
        
        autoIncrement:true,
        primaryKey:true
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
class Member extends Sequelize.Model { }
Project.init({
    id_member:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_user:{
        type:Sequelize.STRING,
        allowNull:false
    },
    id_project:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'members'
})
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
class ProjectBug extends Sequelize.Model{};
ProjectBug.init({
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true
    },
    id_project:{
        type:Sequelize.INTEGER,
        allowNull:false
        
    },
    id_bug:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
},{
sequelize,
nameModel:'projectbugs'
});
ProjectBug.sync({force:true});
User.sync({force:true});
Project.sync({force:true});
Member.sync({force:true});
Bug.sync({force:true});
Project.hasMany(Member,{as: 'Member',foreignKey: 'id_member'});
Member.belogsTo(Project,{as: 'Project',foreignKey: 'id_member'});
User.hasMany(Member,{as:'Member',foreignKey: 'id_user'});
Member.belogsTo(User,{as:'User',foreignKey: 'id_user'});
ProjectBug.hasMany(Bug,{as:'Bug',foreignKey: 'id_bug'});
Bug.belogsTo(ProjectBug,{as:'ProjectBug',foreignKey: 'id_bug'});
ProjectBug.hasMany(Project,{as:'Project',foreignKey: 'id_project'});
Project.belogsTo(ProjectBug,{as:'ProjectBug',foreignKey: 'id_project'});
module.exports={
    sequelize,
    User,
    Project,
    Member,
    Bug,
    ProjectBug
    
}
