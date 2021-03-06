const http = require('http');
const fs = require("fs");
const queryString = require('querystring');

function onRequest(request, response){
    if(request.url === "/")
    {
        fs.createReadStream(__dirname+"/index.html").pipe(response);
    }
    else if(request.url === "/upload")
    {
        var postData = "";
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
                postData += postDataChunk;
            });
        request.addListener("end", function(postDataChunk){
                const myTextAreaValue = queryString.parse(postData).text;
                console.log("Data Recieved " + myTextAreaValue);
                fs.writeFile("./userInput.txt", myTextAreaValue, function(err){ if(err) throw err});
            });
        response.end("Your data is submitted Successfully");    
    }else{
        response.writeHead(404);
        response.end("Error page, the requested path is not exist");
    }
}

http.createServer(onRequest).listen(8888);
console.log("The Server has started on port 8888");
