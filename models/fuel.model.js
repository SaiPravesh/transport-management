const mongoose = require('mongoose');

const { Schema } = mongoose;

const fuelSchema = new Schema({
    fuelId: { type: Number },
    dateTime: { type: Date },
    fleetNumber: { type: String },
    litres: { type: Number },
    place: { type: String },
    randPerLitre: { type: Number },
    kmReading: { type: String },
    lastReading: { type: String },
    tankStartReading: { type: String },
    tankEndReading: { type: String },
    name: { type: String },
});

module.exports = mongoose.model('Fuel', fuelSchema);
