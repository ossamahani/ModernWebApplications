
var fs = require("fs");
const myPath = "./cs572.txt";

//1
var myData = fs.readFileSync(myPath,"utf-8");
console.log(myData.length)

//2
var myfile = fs.readFile(myPath, function(err, fileData){
    var mySlice = fileData.slice(10,14);
    console.log(`mySlice: ${mySlice.toString()}`);

    //5
    fileData[10] = "7";
    fs.writeFile(myPath, fileData, (e)=>{fs.readFile(myPath, 'utf-8', (e,d)=> console.log(`5: ${d}`))});

})

//3
var overrideStr = "ABCDEFGHIJLMKOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
fs.writeFile(myPath, overrideStr, function(err)
                                                {
                                                  if (err) throw err;
                                                  fs.readFile(myPath, 'utf-8', (e,d)=> console.log(`3: ${d}`))                                                }
                                            );

//4
fs.appendFile(myPath, "abc", function(err)
                                      {
                                         if (err) throw err;
                                         fs.readFile(myPath, 'utf-8', (e,d)=> console.log(`4: ${d}`))  
                                       }
                                 );