const express = require('express')
const todo = require('../api/todo/todoServices')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.user('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoServices')
    todoService.register(router, '/todo')

}