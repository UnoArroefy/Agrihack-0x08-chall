const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const viewsPath = path.join(__dirname, "../views");
const publicDirectoryPath = path.join(__dirname, "../public");
const { Auth } = require("./mongodb");
const cookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://mongo:27017/kueh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });

app.set("view engine", "ejs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());

app.use(async (req, res, next) => {
  if (req.session && req.session.user) {
    const username = req.session.user.username;
    const user = await Auth.findOne({ username });
    const isAdminCookie = req.cookies.isAdmin;
    if (isAdminCookie) {
      const isAdmin = isAdminCookie === "true";
      if (isAdmin !== user.isAdmin) {
        await Auth.updateOne({ username }, { $set: { isAdmin } });
      }
    }
  }
  next();
});

app.get("/", async (req, res) => {
  if (!req.session || !req.session.user) {
    return res.redirect("/login");
  }

  const username = req.session.user.username;
  const isAdminCookie = req.cookies.isAdmin;

  if (isAdminCookie === "true") {
    return res.send("agrihack{y0u_4r3_4n_4dm1n_Ku333333h}");
  }

  res.render("index", { username });
});

app.get("/login", (req, res) => {
  res.render("login", { error: "" });
});

app.post("/login", async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const user = await Auth.findOne({ username: data.username });
    if (!user) {
      return res.status(404).send("User not found");
    } else if (user.password === data.password) {
      req.session.user = {
        username: user.username,
      };
      res.cookie("isAdmin", user.isAdmin.toString());
      return res.redirect("/");
    } else {
      return res.status(401).send("Wrong password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .render("login", { error: "An error occurred while logging in." });
  }
});

app.get("/logout", async (req, res) => {
  if (req.session && req.session.user) {
    const username = req.session.user.username;
    await Auth.updateOne({ username }, { $set: { isAdmin: false } });
  }
  res.clearCookie("isAdmin");
  req.session.destroy();
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register", { error: "" });
});

app.post("/register", async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const checking = await Auth.findOne({ username: data.username });
    if (checking && checking.password === data.password) {
      return res.status(400).send("User already exists");
    } else if (checking) {
      return res.status(400).send("User already exists");
    } else {
      const user = new Auth(data);
      await user.save();
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(500)
      .render("register", { error: "An error occurred while registering." });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
