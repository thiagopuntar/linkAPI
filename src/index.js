require("dotenv").config();
const { PORT } = process.env || 3000;
const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const errorMiddleware = require("./middlewares/error.midleware");

const app = express();
app.use("/api/v1", routes);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
