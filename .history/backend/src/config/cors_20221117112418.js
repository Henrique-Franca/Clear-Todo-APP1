module.exports =  function(req, ress, next){
    res.header('Acces-Control-Allow-origin','*')
    res.header('Acces-Control-Allow-origin','GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Acces-Control-Allow-origin','Origin, X-Requested-With, Content-Type,Accept')
    next()

}