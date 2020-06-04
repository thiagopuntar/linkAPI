const mongoose = require("mongoose");
const { CONNECTION_STRING } = process.env;

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) =>
    console.log("Could not stablish connection to MongoDB. ", err)
  );
