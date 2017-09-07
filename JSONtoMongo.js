'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);
/* Connect to your database */

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
 var mongoConnect = mongoose.connection;

 mongoConnect.on('connected', function(){

    fs.readFile('listings.json', 'utf8', function(err, data) {
      addToDB(data);
}    );

   console.log("Is Connected");
 })

 var addToDB = function(data){
   var convert = JSON.parse(data).entries;
   for(var i = 0; i < convert.length; i++){
     var temp = new Listing(convert[i]);
     temp.save(function(data){
       if(err){
         console.log('Failed to save');
       } else {
         console.log('Saved successfully');
       }
     })
   }


 }
/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
