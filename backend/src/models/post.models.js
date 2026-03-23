// to define what and how the data will be stored in the database

const mongoose = require('mongoose');

// to create a schema for the post model

const postSchema = new mongoose.Schema({
  caption: String,
  image: String,
},
{ timestamps:{ createdAt: true, updatedAt: true } });


// to create a model for the post schema
const post = mongoose.model('Post', postSchema);

module.exports = post; // to export the post model for use in other files