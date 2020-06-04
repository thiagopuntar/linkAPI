const BlingService = require("./bling.service");
const PipedriveService = require("./pipedrive.service");

class SyncService {
  async sync() {
    const deals = await PipedriveService.getWonDeals();
  }
}

module.exports = new SyncService();
