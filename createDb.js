const db=require("./backend/models/models");
db.sequelize.sync({force:true}).then(async()=>{
    console.log('tablesCreated');
    
    let user=await db.User.create({
        name:'IonescuDragos',
        role:'tester',
        email:'ionescu.dragos9802@gmail.com',
        password:'password'
    });
    let project=await db.Project.create({
        link:'http://link',
        name:'link2'
    })
    await db.Member.create({
        id_project:project.id_project,
        id_user:user.id_user
    })
}).catch(()=>{
    console.log('could not create tables');
})