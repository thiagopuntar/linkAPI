require("dotenv").config();
const { PORT } = process.env || 3000;
const express = require("express");
const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
