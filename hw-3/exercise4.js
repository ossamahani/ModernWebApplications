
var fs = require("fs");
const myPath = "./cs572.txt";

//1
var myData = fs.readFileSync(myPath,"utf-8");
var buffer = new Buffer(myData, "utf-8");
console.log(myData);
console.log(buffer.length);

//2
var readableStream = fs.createReadStream(myPath, {encoding:'utf-8', hightWaterMark:1});
readableStream.on("data", function(chunk){
    for(var i=10; i<14; i++)
    {
        console.log("MyChuck " + chunk[i]);
    }
}).on("end", function () {
    console.log("finished chunk")
});

//3
var overrideStr = "ABCDEFGHIJLMKOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
fs.writeFile(myPath, overrideStr, function(err)
                                                {
                                                  if (err) throw err;
                                                  console.log(fs.readFileSync(myPath, 'utf-8'))
                                                }
                                            );




//4
fs.appendFile(myPath, "abc", function(err)
                                      {
                                         if (err) throw err;
                                         console.log(fs.readFileSync(myPath, 'utf-8'))
                                       }
                                 );
//5


buffer[10] = "7";
fs.writeFile(myPath, buffer, function(err)
                                    {
                                        if (err) throw err;
                                        console.log(fs.readFileSync(myPath, 'utf-8'))
                                     }
                               );