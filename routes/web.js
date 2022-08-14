const routes = require('express').Router();
const todomodel =  require('../models/toDoModels')

routes.get('/', async (req,res) =>{
    const allTodo = await todomodel.find()
    res.render("index" , { todo : allTodo })
} )


module.exports = routes 