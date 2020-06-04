const axios = require("axios");
const { BLING_API_KEY: apikey } = process.env;
const xml2js = require("xml2js");
const logger = require("../logger");

const defaultParams = {
  apikey,
};

function xmlToObject(obj, rootElement) {
  const builder = new xml2js.Builder();
  return builder.buildObject({
    [rootElement]: obj,
  });
}

class BlingService {
  constructor() {
    this._request = axios.create({
      baseURL: "https://bling.com.br/Api/v2/",
    });
  }

  async insertSalesOrder(order) {
    const xml = xmlToObject(order, "pedido");

    const response = await this._request.post(
      "/pedido/json",
      {},
      { params: { ...defaultParams, xml } }
    );
    const {
      retorno: { erros, pedidos },
    } = response.data;

    if (erros) {
      const {
        erro: { cod },
      } = erros[0];

      //Código 30 são pedidos já cadastrados. Neste caso, simplesmente seguir adiante;
      if (cod !== 30) {
        throw erros;
      }
    }

    return pedidos;
  }

  async getOrders() {
    const response = await this._request("/pedidos/json", {
      params: defaultParams,
    });
    const {
      retorno: { erros, pedidos },
    } = response.data;

    if (erros) {
      throw erros;
    }

    return pedidos;
  }

  async insertProduct(product) {}

  //CPF / CNPJ obrigatório para inclusão de novo cliente.
  //Não existe essa informação no Pipedrive
  async insertCustomer(customer) {
    const xml = xmlToObject(customer, "contato");
    const response = await this._request.post(
      "/contato/json",
      {},
      { params: { ...defaultParams, xml } }
    );

    const {
      retorno: { erros, contatos },
    } = response.data;

    if (erros) {
      throw erros;
    }

    return contatos;
  }
}

module.exports = new BlingService();
