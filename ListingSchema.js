/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  code: {type: String, required : true, unique : true},
  name: {type: String, required : true},
  coordinates: {latitude: Number, longitude: Number},
  address: String

});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  // Creates current date variable
  var currDate = new Date()

  // Sets the updated_at field to currDate
  this.updated_at = currDate;

  // If created_at does not already exist, add it to the field
  if(!this.created_at){
    this.created_at = currDate;
  }

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
