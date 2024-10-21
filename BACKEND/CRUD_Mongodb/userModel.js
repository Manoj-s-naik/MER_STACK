const mongoose = require("mongoose");
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

// userSchema.pre("save", function (next) {
//   this.password = undefined;
//   this.confirmPassword = undefined;
//   next();
// });

// final step
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
