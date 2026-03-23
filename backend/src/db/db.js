// This file is for database connection and configuration.
/// there iis nothing. We only connect the database and export the connectDB function for use in other files.

const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectDB; // to export the connectDB function for use in other files