var express = require('express');
const path = require('path');
var router = express.Router();

var CD = require(path.join(__dirname, '../', 'models', 'cd'));

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/dashboard', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});


router.post('/app/products', function (req, res) {

   var cd = new CD(
   {
         id : parseInt(req.body.id),
         title : req.body.title,
         artist : req.body.artist,
         price : parseInt(req.body.price)
   });

   cd.save(function(err){
         if(err) throw err;
         console.log("cd saved successfully");
   });  
});


router.put('/app/products/:id', function(req,res){
     CD.findOneAndUpdate({'id': req.params.id},{'title':req.body.title, 'artist':req.body.artist, 'price':parseInt(req.body.price)},function (err, cd) {  
           if(err) throw err; 
    });
});


router.delete('/app/products/:id', function(req,res){
     CD.findOneAndRemove({'id': req.params.id },function (err) {  
           if(err) throw err; 
    });
});

router.get('/app/products', function(req,res){
     CD.find({}, { _id:0, __v:0}).lean().exec(function (err, cds) {   
     res.send({data: cds});
    });
});

module.exports = router;
