var express = require('express');
var bodyParser = require('body-parser');


var user = express.Router();
user.use(bodyParser.json());



user.route('/')
.get(function (req, res, next) {
    console.log('user route THIS ONE '+req.name);
        //if (err) throw err;
        
     res.render('user', {
	  title: req.name,
	  heading: 'Welcome: '+req.name,
	  name: req.name,
	  anyArray: ['John Long','Francesca Long','Emily Long','Adam Long'],
	  action: "Working hard"
	  });
})



module.exports = user;