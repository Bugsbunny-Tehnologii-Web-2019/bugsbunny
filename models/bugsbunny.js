const configuration  = require('./../config/configuration.json');
const Sequelize = require('sequelize');

const DB_NAME = configuration.database.database_name;
const DB_USER = configuration.database.username;
const DB_PASS = configuration.database.password;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection successfully!');
}).catch(err => {
    console.log(`Connection error: ${err}`);
});


class User extends Sequelize.Model { };

User.init({
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
   password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'users'
}); 

class Project extends Sequelize.Model { };

Project.init({
    id_project: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
}, {
    sequelize,
    modelName: 'projects'
});
class Member extends Sequelize.Model { };

Member.init({
    id_member: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
   id_user: {
        type: Sequelize.INTEGER,
        references:'users',
        referencesKey:'id_user'
    },
     id_project: {
        type: Sequelize.INTEGER,
        references:'projects',
        referencesKey:'id_project'
    }
    
}, {
    sequelize,
    modelName: 'members'
});
class Bug extends Sequelize.Model { };

Bug.init({
    id_bug: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    link_commit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
   severity: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'bugs'
}); 
class ProjectBug extends Sequelize.Model { };

ProjectBug.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_project: {
        type: Sequelize.INTEGER,
        references:'projects',
        referencesKey:'id_project'
    },
    id_bug: {
        type: Sequelize.INTEGER,
        references:'bugs',
        referencesKey:'id_bug'
    }
}, {
    sequelize,
    modelName: 'projectbugs'
}); 
Project.sync({force: true});
User.sync({force: true});
Member.sync({force:true});
Bug.sync({force:true});
ProjectBug.sync({force:true});
module.exports = {
    sequelize,
    User,
    Project,
    Bug,
    ProjectBug,
    Member
}