const { model, Schema } = require("mongoose");

const SaleOrders = new Schema({
  blingId: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  value: { type: Number, required: true },
});

module.exports = model("SaleOrders", SaleOrders);
