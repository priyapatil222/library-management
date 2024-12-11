const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRoutes = require("./routes/usersRoutes");
const booksRoutes = require("./routes/booksRoutes");
const libraryRoutes = require("./routes/libraryRoutes");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost/LMS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/library", libraryRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
