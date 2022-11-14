const Utilitario = require('../models/utilitario')
const Carro = require('../models/carro')

module.exports = class UtilitarioController {

    static async inserir(req, res ){
        console.log(req.body);

        const c = await Carro.findOne({ placa : req.body.placa })

        const utilitario = new Utilitario({
            idCarro: c._id,
            qtPassageiros: req.body.qtPassageiros,
            tmBagageiro: req.body.tmBagageiro,
            kmLitro: req.body.kmLitro
        }); 

        utilitario.save(utilitario).then(data => {
            res.send(data);

        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao tentar inserir os dados do carro utilitario: ${utilitario}.` })
        })

    }

}