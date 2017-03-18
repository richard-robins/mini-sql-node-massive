var app = require('./index');

module.exports = {
  getPlanes: function(){
    var db = app.get('db');

    db.get_planes([25],function(err, planes){
      console.log(err, planes);
    })
  }
}
