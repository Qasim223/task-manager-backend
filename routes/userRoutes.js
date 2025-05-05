const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById } = require("../controllers/userController");

const router = express.Router();

// User Managment Routes
router.get("/", protect, adminOnly, getUsers); // Get all User (Admin only)
router.get("/:id", protect, getUserById); // Get specific user

module.exports = router;
