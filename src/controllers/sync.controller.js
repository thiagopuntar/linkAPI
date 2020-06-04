const Service = require("../services/sync.service");

class SyncController {
  async sync(req, res) {
    await Service.syncBlingOrders();
    res.status(200).send("Data synced successfully.");
  }
}

module.exports = new SyncController();
