var express = require('express');
var app = express();
var mongojs= require('mongojs');
var db = mongojs('telephoni',['telephoni']);
var bodyparser= require('body-parser');


app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());

app.post('/telephoni/',function(req, res){
	var mail=req.body.email;
	db.telephoni.findOne({email:mail},function(err,doc){
		 if (doc) {
		 		res.json(doc);
                   
                }
                else {
                    console.log("erreur");
                    res.json(null);
                }
	
	});
});

app.listen(3000);
console.log("server running  on port 3000");
