module.exports =  function(req, ress, next){
    res.header('Acces-Control-Allow-origin','*')
    res.header('Acces-Control-Allow-origin','GET, POST, OPTIONS, PUT, PATH, DELETE')
}