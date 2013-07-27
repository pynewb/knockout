var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.logger());
app.use(express.static(__dirname + "/public"));
app.use(express.bodyParser());

var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
var mongoClient = new mongo.MongoClient(server);
mongoClient.open(function(err, mongoClient) {
  if (err) {
    console.log('Error connecting to MongoDB: ' + err);
  } else {
    appDb = mongoClient.db("app");
    console.log("Connected to 'app' database");
    appDb.collection('people', {strict:true}, function (err, collection) {
      if (err) {
        console.log("The 'people' collection doesn't exist. Creating it with sample data...");
        populateDB();
      }
    });
  }
});

app.get('/people', function(req, res) {
  //res.type('text/plain'); // set content-type
  //res.send('i am a beautiful butterfly'); // send text response
    
  console.log("get /people");
    
  appDb.collection('people', function(err, collection) {
    collection.find().toArray(function(err, people) {
      console.log("return " + JSON.stringify(people));        
      res.jsonp(people);
    });
  });
});

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
  var people = [
    { firstName: 'Bert', lastName: 'Bertington' },
    { firstName: 'Charles', lastName: 'Charlesforth' },
    { firstName: 'Denise', lastName: 'Dentiste' }        
  ];

  appDb.collection('people', function(err, collection) {
    if (err) {
      console.log("Unable to connect to collection 'people' to populate it");
    } else {
      collection.insert(people, {safe:true}, function (err, result) {
      });
    }
  }); 
};

var port = process.env.PORT || 4730
app.listen(port);
console.log("listening on port " + port);
