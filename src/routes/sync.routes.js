const { Router } = require("express");
const sync = require("../controllers/sync.controller");

const router = new Router();

router.post("/", sync.sync);

module.exports = router;
