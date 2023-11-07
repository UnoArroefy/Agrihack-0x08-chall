const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/runeweb")
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log("failed to connect to MongoDB");
  });

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  featuresTitle1: {
    type: String,
    required: true,
  },
  featuresDescription1: {
    type: String,
    required: true,
  },
  featuresTitle2: {
    type: String,
    required: true,
  },
  featuresDescription2: {
    type: String,
    required: true,
  },
  featuresTitle3: {
    type: String,
    required: true,
  },
  featuresDescription3: {
    type: String,
    required: true,
  },
  featuresTitle4: {
    type: String,
    required: true,
  },
  featuresDescription4: {
    type: String,
    required: true,
  },
  featuresTitle5: {
    type: String,
    required: true,
  },
  featuresDescription5: {
    type: String,
    required: true,
  },
  featuresTitle6: {
    type: String,
    required: true,
  },
  featuresDescription6: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  discordLink: {
    type: String,
    required: true,
  },
  showcaseLink: {
    type: String,
    required: true,
  },
});

const scriptsItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  discordLink: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LoginData",
    required: true,
  },
});

const loginData = mongoose.model("LoginData", logInSchema);
const itemData = mongoose.model("ItemData", itemSchema);
const scriptsItemData = mongoose.model("scriptsItemData", scriptsItemSchema);

module.exports = { loginData, itemData, scriptsItemData };
