const { Router } = require("express");
const sync = require("./sync.routes");
const data = require("./data.routes");

const router = new Router();

router.use("/sync", sync);
router.use("/data", data);

module.exports = router;
