const { Router } = require("express");
const sync = require("../controllers/sync.controller");

const router = new Router();

router.post("/", sync.syncBlingOrders);
router.post("/database", sync.updateDatabase);

module.exports = router;
