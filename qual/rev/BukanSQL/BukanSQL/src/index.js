const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

mongoose.connect("mongodb://mongo:27017/runeweb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { loginData, itemData, scriptsItemData } = require("./mongodb");

app.set("view engine", "ejs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "your_strong_secret_key_here",
    resave: false,
    saveUninitialized: false,
  })
);

async function createUserIfNotExists() {
  const username = "RuneSoftwareDev";
  const password = "!(RuneSoftware)(1337)";

  try {
    const existingUser = await loginData.findOne({ name: username });

    if (!existingUser) {
      await loginData.create({
        name: username,
        password: password,
        isAdmin: true,
      });
      console.log("User RuneSoftwareDev created in the database.");
    } else {
      console.log("User RuneSoftwareDev already exists in the database.");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUserIfNotExists();

async function createUserIfsNotExists() {
  const username = "EncryptedScriptss";
  const password = "agrihack{N0Sql_1nj3ct10n_1s_3asy}";

  try {
    const existingUser = await loginData.findOne({ name: username });

    if (!existingUser) {
      await loginData.create({
        name: username,
        password: password,
        isAdmin: false,
      });
      console.log("User EncryptedScriptss created in the database.");
    } else {
      console.log("User EncryptedScriptss already exists in the database.");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUserIfsNotExists();

// async function deleteUserIfExists() {
//   const username = "RuneSoftwareDev";

//   try {
//     const existingUser = await loginData.findOne({ name: username });

//     if (existingUser) {
//       await loginData.deleteOne({ name: username });
//       console.log("User RuneSoftwareDev deleted from the database.");
//     } else {
//       console.log("User RuneSoftwareDev does not exist in the database.");
//     }
//   } catch (error) {
//     console.error("Error deleting user:", error);
//   }
// }

// deleteUserIfExists();

app.get("/", async (req, res) => {
  try {
    const allData = await itemData.find({});
    const item = allData[0] || {};
    res.render("index", { item });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/admin/scripts/clear-scripts-data", async (req, res) => {
  try {
    if (req.session.isAdmin) {
      await scriptsItemData.deleteMany({});
      res.redirect("/admin/scripts");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error clearing data:", error);
    res.status(500).send("Error clearing data");
  }
});

app.get("/scripts", async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const itemsPerPage = 9;
    const skip = (currentPage - 1) * itemsPerPage;
    const searchTerm = req.query.q || "";

    const searchQuery = { title: { $regex: new RegExp(searchTerm, "i") } };

    const allData = await scriptsItemData
      .find(searchQuery)
      .populate("user", "name")
      .skip(skip)
      .limit(itemsPerPage)
      .exec();

    const totalScripts = await scriptsItemData.countDocuments(searchQuery);
    const totalPages = Math.ceil(totalScripts / itemsPerPage);

    res.render("scripts", {
      data: allData,
      currentPage,
      totalPages,
      searchTerm,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/admin/scripts", async (req, res) => {
  try {
    if (req.session.isAdmin) {
      const currentPage = parseInt(req.query.page) || 1;
      const itemsPerPage = 9;
      const skip = (currentPage - 1) * itemsPerPage;
      const searchTerm = req.query.q || "";

      const searchQuery = { title: { $regex: new RegExp(searchTerm, "i") } };

      const allData = await scriptsItemData
        .find(searchQuery)
        .skip(skip)
        .populate("user", "name")
        .limit(itemsPerPage)
        .exec();

      const totalScripts = await scriptsItemData.countDocuments(searchQuery);
      const totalPages = Math.ceil(totalScripts / itemsPerPage);

      res.render("scripts-admin", {
        data: allData,
        currentPage,
        totalPages,
        searchTerm,
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/admin/scripts/edit/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const scriptId = req.params.id;
    try {
      const script = await scriptsItemData.findById(scriptId);

      if (script) {
        res.render("edit-script", { script });
      } else {
        res.redirect(
          `/error?message=${encodeURIComponent("Script not found")}`
        );
      }
    } catch (error) {
      console.error("Error fetching script data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error fetching script data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/admin/scripts/edit/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const scriptId = req.params.id;
    const { title, description, images, downloadLink, discordLink } = req.body;
    try {
      await scriptsItemData.findByIdAndUpdate(scriptId, {
        title,
        description,
        images,
        downloadLink,
        discordLink,
      });

      res.redirect("/admin/scripts");
    } catch (error) {
      console.error("Error updating script data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error updating script data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/admin/scripts/delete/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const scriptId = req.params.id;
    try {
      await scriptsItemData.findByIdAndDelete(scriptId);

      res.redirect("/admin/scripts");
    } catch (error) {
      console.error("Error deleting script:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error deleting script")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const isAdmin = await loginData.findOne({ name, isAdmin: true });

    if (isAdmin) {
      req.session.isAdmin = true;
      res.redirect("/admin");
    } else {
      const checks = await loginData.findOne({ name, password });
      if (checks && checks.password === password) {
        req.session.naming = name;
        req.session.token = checks.toke;
        res.redirect("/dashboard/scripts");
      } else {
        res.redirect(
          `/error?message=${encodeURIComponent("Wrong details provided")}`
        );
      }
    }
  } catch (error) {
    console.log(error);
    res.redirect(
      `/error?message=${encodeURIComponent("An error occurred during login")}`
    );
  }
});

app.get("/dashboard/scripts", async (req, res) => {
  if (req.session.naming) {
    try {
      const currentPage = parseInt(req.query.page) || 1;
      const itemsPerPage = 9;
      const skip = (currentPage - 1) * itemsPerPage;
      const searchTerm = req.query.q || "";

      const searchQuery = { title: { $regex: new RegExp(searchTerm, "i") } };

      const user = await loginData.findOne({ name: req.session.naming });
      if (!user) {
        res.redirect("/login");
        return;
      }

      const userScripts = await scriptsItemData
        .find({ user: user._id, ...searchQuery })
        .skip(skip)
        .populate("user", "name")
        .limit(itemsPerPage)
        .exec();

      const totalScripts = await scriptsItemData.countDocuments({
        user: user._id,
        ...searchQuery,
      });
      const totalPages = Math.ceil(totalScripts / itemsPerPage);

      res.render("dashboard-scripts", {
        userScripts,
        currentPage,
        totalPages,
        searchTerm,
        userName: req.session.naming,
      });
    } catch (error) {
      console.error("Error fetching user's script posts:", error);
      res.redirect(
        "/error?message=" +
          encodeURIComponent("Error fetching user's script posts")
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/dashboard/scripts/delete-all", async (req, res) => {
  if (req.session.naming) {
    try {
      const user = await loginData.findOne({ name: req.session.naming });
      if (!user) {
        res.redirect("/login");
        return;
      }
      await scriptsItemData.deleteMany({ user: user._id });

      res.redirect("/dashboard/scripts");
    } catch (error) {
      console.error("Error deleting user's script posts:", error);
      res.redirect(
        "/error?message=" +
          encodeURIComponent("Error deleting user's script posts")
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/dashboard/scripts/new", (req, res) => {
  if (req.session.naming) {
    res.render("new-script");
  } else {
    res.redirect("/login");
  }
});

app.post("/dashboard/scripts/new", async (req, res) => {
  if (req.session.naming) {
    const { title, description, images, downloadLink, discordLink } = req.body;
    const user = await loginData.findOne({ name: req.session.naming });

    try {
      const newScript = new scriptsItemData({
        title,
        description,
        images,
        downloadLink,
        discordLink,
        user: user._id,
      });

      await newScript.save();
      res.redirect("/dashboard/scripts");
    } catch (error) {
      console.error("Error creating a script post:", error);
      res.redirect(
        "/error?message=" + encodeURIComponent("Error creating the post")
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/dashboard/scripts/edit/:id", async (req, res) => {
  if (req.session.naming) {
    const scriptId = req.params.id;
    try {
      const script = await scriptsItemData.findById(scriptId);

      if (script) {
        res.render("user-scripts-edit", { script });
      } else {
        res.redirect(
          `/error?message=${encodeURIComponent("Script not found")}`
        );
      }
    } catch (error) {
      console.error("Error fetching script data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error fetching script data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/dashboard/scripts/edit/:id", async (req, res) => {
  if (req.session.naming) {
    const scriptId = req.params.id;
    const { title, description, downloadLink, discordLink } = req.body;

    try {
      const script = await scriptsItemData.findById(scriptId);

      if (script) {
        await scriptsItemData.findByIdAndUpdate(scriptId, {
          title,
          description,
          downloadLink,
          discordLink,
        });

        res.redirect("/dashboard/scripts");
      } else {
        res.redirect(
          "/error?message=" + encodeURIComponent("Script not found")
        );
      }
    } catch (error) {
      console.error("Error updating script data:", error);
      res.redirect(
        "/error?message=" + encodeURIComponent("Error updating script data")
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/dashboard/scripts/delete/:id", async (req, res) => {
  if (req.session.naming) {
    const scriptId = req.params.id;
    try {
      const script = await scriptsItemData.findById(scriptId);

      if (script) {
        await scriptsItemData.findByIdAndDelete(scriptId);
        res.redirect("/dashboard/scripts");
      } else {
        res.redirect(
          `/error?message=${encodeURIComponent("Script not found")}`
        );
      }
    } catch (error) {
      console.error("Error deleting script:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error deleting script")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { name, password, confirm_password } = req.body;

  try {
    const existingUser = await loginData.findOne({ name: name });

    if (existingUser) {
      return res.redirect(
        `/error?message=${encodeURIComponent("User already exists")}`
      );
    }

    if (password !== confirm_password) {
      return res.redirect(
        `/error?message=${encodeURIComponent("Passwords do not match")}`
      );
    }

    const newUser = await loginData.create({
      name: name,
      password: password,
      isAdmin: false,
    });

    console.log("User created in the database:", newUser);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.redirect(
      `/error?message=${encodeURIComponent("Error creating user")}`
    );
  }
});

app.get("/admin", async (req, res) => {
  if (req.session.isAdmin) {
    const { naming } = req.session;
    try {
      const allData = await itemData.find({});
      const item = allData.length > 0 ? allData[0] : {};
      res.render("admin", { data: allData, naming, item });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error fetching data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/admin/account-manager", async (req, res) => {
  if (req.session.isAdmin) {
    try {
      const allUsers = await loginData.find({ isAdmin: { $ne: true } });

      res.render("account-manager", { users: allUsers });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error fetching data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/admin/account-manager/edit/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const userId = req.params.id;
    try {
      const user = await loginData.findById(userId);

      if (user) {
        res.render("edit-user", { user });
      } else {
        res.redirect(`/error?message=${encodeURIComponent("User not found")}`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error fetching user data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/admin/account-manager/edit/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const userId = req.params.id;
    const { name, password, isAdmin } = req.body;
    try {
      await loginData.findByIdAndUpdate(userId, { name, password, isAdmin });

      res.redirect("/admin/account-manager");
    } catch (error) {
      console.error("Error updating user data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error updating user data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/admin/account-manager/delete/:id", async (req, res) => {
  if (req.session.isAdmin) {
    const userId = req.params.id;
    try {
      await loginData.findByIdAndDelete(userId);

      res.redirect("/admin/account-manager");
    } catch (error) {
      console.error("Error deleting user:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error deleting user")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/admin/account-manager/delete-all", async (req, res) => {
  if (req.session.isAdmin) {
    try {
      await loginData.deleteMany({ isAdmin: { $ne: true } });

      res.redirect("/admin/account-manager");
    } catch (error) {
      console.error("Error deleting user data:", error);
      res.redirect(
        `/error?message=${encodeURIComponent("Error deleting user data")}`
      );
    }
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.redirect("/admin");
    }
    res.clearCookie("sid");
    res.redirect("/login");
  });
});

app.post("/update", async (req, res) => {
  const {
    id,
    title,
    description,
    images,
    featuresTitle1,
    featuresDescription1,
    featuresTitle2,
    featuresDescription2,
    featuresTitle3,
    featuresDescription3,
    featuresTitle4,
    featuresDescription4,
    featuresTitle5,
    featuresDescription5,
    featuresTitle6,
    featuresDescription6,
    downloadLink,
    discordLink,
    showcaseLink,
  } = req.body;

  try {
    await itemData.deleteMany({});

    const newItem = new itemData({
      title,
      description,
      images,
      featuresTitle1,
      featuresDescription1,
      featuresTitle2,
      featuresDescription2,
      featuresTitle3,
      featuresDescription3,
      featuresTitle4,
      featuresDescription4,
      featuresTitle5,
      featuresDescription5,
      featuresTitle6,
      featuresDescription6,
      downloadLink,
      discordLink,
      showcaseLink,
    });

    await newItem.save();
    res.redirect("/admin");
  } catch (error) {
    console.error("Error updating item:", error);
    res.redirect(`/error?message=${encodeURIComponent("Error updating item")}`);
  }
});

app.get("/error", (req, res) => {
  const errorMessage = req.query.message || "An error occurred.";
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Error</title>
    </head>
    <body>
      <script>
        alert('${errorMessage}');
        history.back();
      </script>
    </body>
    </html>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server listening on port", port);
});
