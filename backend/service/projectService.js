const { Project } = require('./../models/models');
const { Member } = require('../models/models');

var Sequelize = require('sequelize');
var Op = Sequelize.Op;

const project = { 
    create: async (project)=>{
        try{ 
            const result=await Project.create(project);
            return result;
            
        }catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async () => {
        try {
            const projects = await Project.findAll();
            return projects;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    getAllForUser: async (userId) => {
        try {
            const memberships = await Member.findAll({
                where: {
                    id_user: userId
                }
            });

            const projectsId = memberships.map(el => el.id_project);

            const projects = await Project.findAll({
                where: {
                    id_project: {
                        [Op.in]: projectsId
                    }
                }
            });

            return projects;
        } catch(err) {
            throw new Error(err.message);
        }
    },
    delete: async (id) => {
        try {
            return await Project.destroy({
                where: {
                    id_project: id
                }
            });
        } catch(err) {
            throw new Error(err.message);
        }
    }
};
module.exports=project;