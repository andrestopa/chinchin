const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const testSchema = new mongoose.Schema({
    name: {
        type: String
    },
    deductible: {
        type: Number
    },
    stop_loss: {
        type: Number
    },
    oop_max: {
        type: Number
    }
});

module.exports = mongoose.model('Test', testSchema, 'test');