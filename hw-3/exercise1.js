require('http').createServer(function(req, res){
     require('fs').createReadStream('./img.jpg').pipe(res);
}).listen(4000, '127.0.0.1');