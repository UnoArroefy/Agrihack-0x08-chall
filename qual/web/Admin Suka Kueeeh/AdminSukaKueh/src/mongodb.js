const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/kueh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((e) => {
    console.log("Failed to connect to MongoDB");
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Auth = mongoose.model("User", userSchema);

module.exports = { Auth };
