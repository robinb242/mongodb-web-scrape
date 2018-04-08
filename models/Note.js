// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");


// Create a schema class
var Schema = mongoose.Schema;
// Create the Note schema
var NoteSchema = new Schema({
  // Just a string
  noteText: {
    type: String
  }
});



// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;