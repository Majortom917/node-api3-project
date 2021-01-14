// require your server and start it
const server = require('./api/server')

server.listen(5000, ()=>{
    console.log("Server Listening on port 5000")
})