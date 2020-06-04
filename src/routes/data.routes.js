const { Router } = require("express");
const controller = require("../controllers/data.controller");

const router = new Router();

router.get("/", controller.getTotalValues);

module.exports = router;
