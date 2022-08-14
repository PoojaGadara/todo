const routes = require('express').Router();
const todo = require('../controllers/toDo')

routes.post('/todo',todo.todo)
routes.get('/delete/:_id',todo.delete)

module.exports = routes