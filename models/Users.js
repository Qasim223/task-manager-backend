const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profileImageUrl: { type: String, default: null },
    role: { type: String, enum: ["admin", "member"], default: "member" }, // Role-based access
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserScheme);
