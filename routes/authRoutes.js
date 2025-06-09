const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// ✅ Login Route
router.post("/login", login);

// ✅ TEMP: Register Route (for adding admin)
router.post("/register", async (req, res) => {
  console.log("Registering admin...");
  const { email, password } = req.body;

  try {
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();

    res.status(201).json({ msg: "Admin created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
