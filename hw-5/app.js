var app = require('express')();
var fs = require('fs');

app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);


app.get("/inventors", function(request, response){

    var obj = JSON.parse(fs.readFileSync(__dirname+'/inventors.json', 'utf8'));
    response.render(__dirname+'/index.ejs', {title:'Inventors', obj:obj});
});
app.listen(8888, ()=>console.log(`listening to 8888`))