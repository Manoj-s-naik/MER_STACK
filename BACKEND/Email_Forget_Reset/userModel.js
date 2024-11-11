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
    required: [true, "password should be same"],
    minlength: 6,
    validate: [
      function () {
        return this.password === this.confirmPassword; // Use strict equality
      },
      "password should be equal to the confirm password",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "admin", "manager", "moderator", "fee curator"],
    default: "user",
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
});

userSchema.pre("save", function (next) {
  console.log('pre save was called');
  this.confirmPassword = undefined; // ConfirmPassword should be undefined before saving
  next();
});

userSchema.post("save", function () {
  console.log('post save was called');
  this.password = undefined; // Corrected to 'password' instead of 'Password'
  this.__v = undefined; // Optionally remove __v field
});

// Final step: Export the model
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
