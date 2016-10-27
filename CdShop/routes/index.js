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
         price : parseFloat(req.body.price)
   });


   console.log(parseInt(req.body.id));
   console.log(req.body.title);
   console.log(req.body.artist);
   console.log(parseFloat(req.body.price));

   cd.save(function(err){
         if(err) throw err;
         console.log("cd saved successfully");
         res.send({data : {id:cd.id, title:cd.title, artist:cd.artist, price:cd.price}});
   }); 
});


router.put('/app/products/:id', function(req,res){
     CD.findOneAndUpdate({'id': req.params.id},{'title':req.body.title, 'artist':req.body.artist, 'price':parseFloat(req.body.price)},function (err, cd) {  
           if(err) throw err; 
           res.send(null);
    });
});


router.delete('/app/products/:id', function(req,res){
     CD.findOneAndRemove({'id': req.params.id },function (err) {  
           if(err) throw err; 
           res.send(null);
    });
});

router.get('/app/products', function(req,res){
      query = {};
      if (req.query.title != "" &&  req.query.title != undefined)
      {
            query = {title : {$regex : req.query.title} }; 
      }

      console.log(query);

      CD.find(query, { _id:0, __v:0}).lean().exec(function (err, cds) {   
      res.send({data: cds});
    });
});

module.exports = router;
