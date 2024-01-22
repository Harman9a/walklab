const mongoose = require("mongoose");

const mongoConnect = async () => {
  const DB = await mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => {
      console.log("Connected to DB!");
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
