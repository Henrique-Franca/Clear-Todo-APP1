module.exports =  function(req, ress, next){
    res.header('Access-Control-Allow-origin','*')
    res.header('Access-Control-Allow-origin','GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Access-Control-Allow-origin','Origin, X-Requested-With, Content-Type,Accept')
    next()

}