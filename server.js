var http = require('http'); 
var server = http.createServer(function (req, res) {   

    res.write('Welcome to program')
    res.end()

});

server.listen(8080); 

console.log('server running at port 8080....')