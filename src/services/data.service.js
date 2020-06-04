const moment = require("moment");
const SaleOrders = require("../models/SaleOrders");

class DataService {
  async getTotalValues() {
    const total = await SaleOrders.aggregate([
      {
        $group: {
          _id: "$date",
          total: { $sum: "$value" },
        },
      },
    ]);

    return total.map((data) => {
      return {
        date: moment(data._id).format("DD/MM/YYYY"),
        value: data.total,
      };
    });
  }
}

module.exports = new DataService();
