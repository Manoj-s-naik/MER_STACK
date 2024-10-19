const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2zfal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbLink)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is not correct or it is required"],
    unique: [true, "email should be unique"],
  },
  password: {
    type: String,
    required: [true, "password required with length 6"],
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, "password should same"],
    minlength: 6,
    // validate: function () {
    //   this.password == confirmPassword;
    //   return this.password == this.confirmPassword;
    // }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "admin", "manager"],
    default: "user",
  },
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "Drama",
      "Comedy",
      "Action",
      "Thriller",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Animation",
      "Documentary",
      "Other",
    ],
    required: true,
  },
  rating: {
    type: Number,
    minlength: 5,
  },
  cast: {
    type: [String],
  },
  director: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  trailerLink: {
    type: String,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  this.password = undefined;
  this.confirmPassword = undefined;
  next();
});

// final step
const userModel = mongoose.model("user", userSchema);
const movieModel = mongoose.model("movies", movieSchema);

const createUser = async function (req, res) {
  try {
    const userObject = req.body;
    const user = await userModel.create(userObject);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};

const addMovies = async (req, res) => {
  try {
    const movieObject = req.body;
    const movie = await movieModel.create(movieObject);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({
      message: "internal server  error",
      error: err,
    });
  }
};

const getAlluser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (user.length != 0) {
      res.status(200).json({
        message: user,
      });
    } else {
      res.status(404).json({
        message: "there is no users",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "internal error",
      message: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal error",
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (user === null) {
      res.status(404).json({
        message: "user id is not present",
      });
    } else {
      res.status(200).json({
        message: "user is delete successfully",
        user: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "internal error",
    });
  }
};

// middleware
app.use(express.json());
// routes
app.post("/users", createUser);
app.get("/user", getAlluser);
app.get("/user/:id", getUserById);
app.delete("/user/:id", deleteUserById);
app.post("/movies", addMovies);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
