// to creae a server
require('dotenv').config(); // to load environment variables from .env file
const express = require('express');
const uploadFile = require('./service/storage.service'); // to handle file uploads
const multer = require('multer'); // to handle file uploads
const postModel = require('./models/post.models'); // to interact with the database for posts
const cors = require('cors');  // to handle CORS


const app = express();
app.use(express.json()); // to parse JSON data in request body
app.use(cors()); // to handle CORS

const upload = multer({storage : multer.memoryStorage()}); // to configure multer to store uploaded files in memory

app.post('/create-post', upload.single("image"), async(req , res ) => {
  const result = await uploadFile(req.file.buffer); // to upload the file to imagekit and get the result
  const post = await postModel.create({
    image: result.url, // to save the image URL in the database
    caption: req.body.caption
  })
  return res.status(200).json({
    message: "Post created successfully",
    post
  })
  console.log(req.body)
  console.log(req.file)
}) 

app.get('/posts', async(req, res) => {
  const posts = await postModel.find(); // to get all posts from the database
  return res.status(200).json({
    message: "Posts fetched successfully",
    posts
  })
})


app.delete('/delete-post/:id', async(req, res) => {
  const post = await postModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: "Post deleted successfully",
    post
  })
})

module.exports = app; // to export the app for use in other files