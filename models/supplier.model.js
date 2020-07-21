const mongoose = require('mongoose');

const { Schema } = mongoose;

const supplierSchema = new Schema({
    supplierId: { type: Number },
    date: { type: Date },
    invoiceNumber: { type: Number },
    supplierName: { type: String },
    accounts: { type: String },
    truckTrailer: { type: String },
    amount: { type: Number },
});

module.exports = mongoose.model('Supplier', supplierSchema);
