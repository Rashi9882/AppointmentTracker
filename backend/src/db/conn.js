const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

const uri = `${process.env.MONGO_CONNECTION}`
 mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });