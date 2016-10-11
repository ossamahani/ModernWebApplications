var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dbtest';


var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}    



/* GET home page. */
router.get('/', function(req, res, next) {
      MongoClient.connect(url, function(err, db) {
            db.collection('lab1').findOne({},function(err, doc){
                 if(err) throw err;
                 res.render('index', { title: 'My Decrypted Message', message:decrypt(doc.message)});
      });
    });
});

module.exports = router;
