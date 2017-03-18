var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://@localhost/sandbox';

var app = module.exports = express();

var massiveInstance = massive.connectSync({connectionString : connectionString})

app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');

var controller = require('./controller.js');

db.new_plane((dbError, dbResults) => {
  console.log(dbError, 'plane added');
});

controller.getPlanes();
// db.get_planes((err, planes) => {
//   conosle.log(err, planes);
//   controller.get_planes();
// })


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
