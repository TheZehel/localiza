const mongoose = require('mongoose')

const Esportivo = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true 
    },
    tp100km: {
        type: Number,
        required: true 
    },
    melhorias: {
        type: [String],
        required: false 
    }

}, {versionKey: false});

module.exports = mongoose.model('Esportivo', Esportivo);