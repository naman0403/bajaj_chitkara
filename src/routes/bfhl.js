const express = require("express");
const router = express.Router();

const { fibonacci, isPrime, gcd, lcm } = require("../utils/mathUtils");
const { askAI } = require("../services/aiService");

router.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "your_roll@chitkara.edu.in"
  });
});

router.post("/bfhl", async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    if (keys.length !== 1) {
      return res.status(400).json({ is_success: false });
    }

    const key = keys[0];
    const value = req.body[key];
    let data;

    switch (key) {
      case "fibonacci":
        if (!Number.isInteger(value) || value < 0)
          return res.status(400).json({ is_success: false });
        data = fibonacci(value);
        break;

      case "prime":
        if (!Array.isArray(value))
          return res.status(400).json({ is_success: false });
        data = value.filter(isPrime);
        break;

      case "hcf":
        if (!Array.isArray(value) || value.length < 2)
          return res.status(400).json({ is_success: false });
        data = value.reduce(gcd);
        break;

      case "lcm":
        if (!Array.isArray(value) || value.length < 2)
          return res.status(400).json({ is_success: false });
        data = value.reduce(lcm);
        break;

      case "AI":
  if (typeof value !== "string" || value.trim() === "") {
    return res.status(400).json({ is_success: false });
  }

  try {
    data = await askAI(value);
  } catch (err) {
    // ✅ FALLBACK (external AI failure)
    data = "AI";
  }
  break;



      default:
        return res.status(400).json({ is_success: false });
    }

    return res.status(200).json({
      is_success: true,
      official_email: "your_roll@chitkara.edu.in",
      data
    });

  } catch (err) {
    return res.status(500).json({ is_success: false });
  }
});

module.exports = router;
