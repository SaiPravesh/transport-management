const mongoose = require('mongoose');

const { Schema } = mongoose;

const freightSchema = new Schema({
    freightId: { type: Number },
    dateTransported: { type: Date },
    fleetNumber: { type: String },
    driver: { type: String },
    loadNumber: { type: Number },
    deliveryNoteNumber: { type: Number },
    orderNumber: { type: Number },
    invoiceNumber: { type: Number },
    loadingPoint: { type: String },
    dropOffPoint: { type: String },
    freightType: { type: String },
    weightLoaded: { type: Number },
    unit: { type: String },
    tariffPerTon: { type: String },
    tariffPerLoad: { type: String },
    clientName: { type: String },
    tollTariff: { type: String },
    loadKm: { type: Number },
    offloadKm: { type: Number },
    fuelPricePerLitre: { type: Number },
});

module.exports = mongoose.model('Freight', freightSchema);
