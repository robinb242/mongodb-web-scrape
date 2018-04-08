// require mongoose
var mongoose = require('mongoose');



mongoose.Promise = Promise;

mongoose.connect('mongodb://heroku_m25g50gv:gYJNjFsqROWlnynQhfqk9xeaVDQnj5dj@ds115569.mlab.com:15569/heroku_m25g50gv')
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});

// export the database
module.exports = db;
