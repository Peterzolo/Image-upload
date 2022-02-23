const mongoose = require("mongoose");

const dbConnection = async () => {
  const mongoDbConn = await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDb successfully connected");
};

module.exports = dbConnection;
