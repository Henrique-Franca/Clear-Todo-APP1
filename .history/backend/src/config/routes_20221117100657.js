const express = require('express')
const todo = require('../api/todo/todoServices')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    seerver.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoServices')
    todoService.register(router, '/todo')

}