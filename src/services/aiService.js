const axios = require("axios");

async function askAI(question) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        contents: [
          {
            parts: [{ text: question }]
          }
        ]
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("Empty AI response");
    }

    return text.trim().split(/\s+/)[0];
  } catch (err) {
    console.error("AI ERROR:", err.response?.data || err.message);
    throw err;
  }
}

module.exports = { askAI };
