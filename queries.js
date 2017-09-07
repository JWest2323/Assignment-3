/* Fill out these functions using Mongoose queries*/
var should = require('should'),
    mongoose = require('mongoose'),
    Listing = require('./ListingSchema'),
    config = require('./config');



mongoose.connect(config.db.uri);
/* Connect to your database */

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
 var mongoConnect = mongoose.connection;

 mongoConnect.on('connected', function(){
   console.log("Is Connected");
   //findLibraryWest();
  //  removeCable();
    //updatePhelpsLab();
  retrieveAllListings();
 })


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({name: 'Library West'}, function(error, user){
     if(error) throw error;

     // lib west object
     console.log(user);
   });


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({code: 'CABL'}, function(err){
     if (err) throw err;

     // we have deleted the user
     console.log('User has been deleted');
   })
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1275 Center Drive Biomedical Sciences Bldg J383 P.O. Box 116131 Gainesville, FL 32611-6131'}, function(err,user){
     if(err) throw err;

console.log(user);

   } )
};


var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */

   Listing.find({}, function(err, users){
     if (err) throw err;


     console.log(users);
   })


};

// findLibraryWest();
// removeCable();
// updatePhelpsLab();
// retrieveAllListings();
