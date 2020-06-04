const Service = require("../services/sync.service");

class SyncController {
  async syncBlingOrders(req, res) {
    await Service.syncBlingOrders();
    res.status(200).send("Data synced successfully.");
  }

  async updateDatabase(req, res) {
    await Service.updateDatabase();
    res.status(200).send("Database updated successfully.");
  }
}

module.exports = new SyncController();
