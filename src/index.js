require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const express = require("express");
const bfhlRoutes = require("./routes/bfhl");

const app = express();
app.use(express.json());

app.use("/", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
