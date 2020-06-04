const axios = require("axios");
const { PIPEDRIVE_API_KEY: apiKey, PIPEDRIVE_DOMAIN } = process.env;

const params = {
  api_token: apiKey,
};

class PipedriveService {
  constructor() {
    this.request = axios.create({
      baseURL: `https://${PIPEDRIVE_DOMAIN}.pipedrive.com/api/v1/`,
    });
  }

  async getWonDeals() {
    try {
    } catch (error) {}
  }
}

module.exports = new PipedriveService();
