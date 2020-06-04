const { Router } = require("express");
const sync = require("./sync.routes");

const router = new Router();

router.use("/sync", sync);

module.exports = router;
