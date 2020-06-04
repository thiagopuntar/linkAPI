const BlingService = require("./bling.service");
const PipedriveService = require("./pipedrive.service");
const moment = require("moment");

class SyncService {
  async syncBlingOrders() {
    const deals = await PipedriveService.getWonDeals();

    const promises = [];
    for (let i = 0; i < deals.length; i++) {
      const { org_id, title, value, currency, won_time } = deals[i];
      const data = moment(won_time).format("DD/MM/YYYY");

      const pedido = {
        data,
        cliente: {
          nome: org_id.name,
        },
        itens: {
          item: [{ codigo: 0, descricao: title, qtde: 1, vlr_unit: value }],
        },
      };

      promises.push(BlingService.insertSalesOrder(pedido));
    }

    await Promise.all(promises);
  }
}

module.exports = new SyncService();
