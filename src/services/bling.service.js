const axios = require("axios");
const { BLING_API_KEY: apikey } = process.env;

const params = {
  apikey,
};

class BlingService {
  constructor() {
    this.request = axios.create({
      baseURL: "https://bling.com.br/Api/v2/",
    });
  }

  async insertSalesOrder(order) {}
}

module.exports = new BlingService();
