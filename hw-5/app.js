var app = require('express')();

app.set('view engine', 'ejs');



app.get("/inventors", function(request, response){

    

    response.render(__dirname+'/index.ejs', {title:'MWA'});
});
app.listen(8888, ()=>console.log(`listening to 8888`))