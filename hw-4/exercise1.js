const http = require('http');
const fs = require("fs");

http.createServer(function(req,res){
    const path = __dirname + req.url;
    if (fs.existsSync(path)) 
            fs.createReadStream(path).pipe(res);
    else
       res.end("This path is not exist on server")
}).listen(4000,'127.0.0.1');