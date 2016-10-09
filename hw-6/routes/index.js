var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/contactus', function(req, res, next) {
  var errors = req.validationErrors();
  res.render('contactus', { title: 'Contact Us', errors:errors, csrftoken: req.csrfToken()});
});


router.post('/contactus', function(req, res, next) {

  req.assert("fullName", "Full Name is required").notEmpty();
  req.assert("message", "Message is required").notEmpty();

  var errors = req.validationErrors();

  if (errors) 
  {
       console.log(errors);
       res.render('contactus', { title: 'Contact Us', errors:errors, csrftoken: req.csrfToken()});
       return;
  }
  else
  {
      var data = {
            fullName:req.body.fullName,
            type:req.body.type,
            message:req.body.message
      };
      fs.writeFile(__dirname + "/mydata.txt", JSON.stringify(data) , function(err){
              if (err) throw err;
      });
      res.send('Thank you , '+ data.fullName  + ". Your " + data.type + " has been submitted, we will be back to you soon.");
  }
});


module.exports = router;
