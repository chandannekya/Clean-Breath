const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODBURL)
    .then(() => console.log("Db connected"))
    .catch((error) => {
      console.log("connection fialed");
      console.log(error);
      process.exit(1);
    });
};
