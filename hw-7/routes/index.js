var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dbtest';
/* GET home page. */
router.get('/', function(req, res, next) {
      MongoClient.connect(url, function(err, db) {
            db.collection('lab1').findOne({},function(err, doc){
                 if(err) throw err;
                 res.render('index', { title: 'My Encrpted Message', message:doc.message});
      });
    });
});

module.exports = router;
