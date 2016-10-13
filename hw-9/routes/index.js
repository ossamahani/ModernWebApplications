var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dbtest';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add Location', message:''});
});


router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Search Location'});
});


router.post('/search', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
            db.collection('lab9').find({'$text' : {'$search': req.body.name}} , function(err, doc){
                 if(err) throw err;
                 console.dir(doc);
                 db.close();
            // db.collection('lab9').find({location:{$near:['currentLong', 'currentLat']}},function(err,doc){
            //      if(err) throw err;
            //      console.dir(doc);
            //      db.close();
      });
   });
});


router.post('/save', function(req, res, next) {
   MongoClient.connect(url, function(err, db) {
            var lat = parseFloat(req.body.lat);
            var long = parseFloat(req.body.long);
            db.collection('lab9').insert({name:req.body.name, category:req.body.category,location:[long, lat]},function(err){
                 if(err) throw err;
                 req.body.name = '';
                 req.body.lat = '';
                 req.body.long = '';
                 res.render('index', { title: 'Add Location', message : "Location Added Successfully"});
                 db.close();
        });
   });
});

module.exports = router;