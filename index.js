const { Sequelize } = require('sequelize');
const {sequelize, User}= require('./models');
const express= require('express');

const app=express();


app.use(express.json());

app.post ('/post',async (req, res)=>{
    const {name, email, role}=req.body;
    const user=await User.create({name, email, role})
    res.send(500).send(user);

})
app.listen({port:5000}, ()=>{
    console.log('Server hosts on https://localhosts/5000/posts')
    // await sequelize.sync({force:true});
})
    


  