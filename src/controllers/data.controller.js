const Service = require("../services/data.service");

class DataController {
  async getTotalValues(req, res) {
    const values = await Service.getTotalValues();
    res.status(200).json(values);
  }
}

module.exports = new DataController();
