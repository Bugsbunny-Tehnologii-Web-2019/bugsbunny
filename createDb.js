const db=require("./../models/models");
db.sequelize.sync().then(async()=>{
    console.log('tablesCreated');
}).catch(()=>{
    console.log('could not create tables');
})