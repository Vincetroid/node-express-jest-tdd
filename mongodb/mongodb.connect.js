const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      // `mongodb+srv://${process.env.REACT_APP_MONGODB_USER}:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0-ax9mf.mongodb.net/test?retryWrites=true&w=majority`,
      "mongodb+srv://SuperUserTest:XSsVFDu28mIaenX4@cluster0-ax9mf.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.log("Error connecting to mongodb");
    console.log(err);
  }
}

module.exports = { connect };