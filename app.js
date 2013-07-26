var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/shows', function(req, res) {
    //res.type('text/plain'); // set content-type
    //res.send('i am a beautiful butterfly'); // send text response
    
    console.log("get /shows");
    
    var people = [
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }        
    ];

    console.log("return " + JSON.stringify(people));
    
    res.jsonp(people);
});

var port = process.env.PORT || 4730
app.listen(port);
console.log("listening on port " + port);
