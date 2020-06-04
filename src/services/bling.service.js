const axios = require("axios");
const { BLING_API_KEY: apiKey } = process.env;

const params = {
  api_token: apiKey,
};

class BlingService {
  constructor() {
    this.request = axios.create({
      baseURL: "https://bling.com.br/Api/v2/",
    });
  }
}

module.exports = new BlingService();
