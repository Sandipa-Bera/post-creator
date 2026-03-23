require("dotenv").config(); // to load environment variables from .env file
const app = require('./src/app'); // to import the app from src/app.js
const connectDB = require('./src/db/db');

require("./src/db/db"); // to connect to the database

connectDB(); // to connect to the databased

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});