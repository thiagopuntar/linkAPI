const axios = require("axios");
const { PIPEDRIVE_API_KEY: apiKey, PIPEDRIVE_DOMAIN } = process.env;

const defaultParams = {
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
      const params = { ...defaultParams, status: "won" };
      const response = await this.request.get("/deals", { params });
      const { success, data } = response.data;

      if (success) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PipedriveService();
