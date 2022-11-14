const Esportivo = require('../models/esportivo')
const Carro = require('../models/carro')

module.exports = class EsportivoController {

    static async inserir(req, res ){
        console.log(req.body);

        const c = await Carro.findOne({ placa : req.body.placa })

        const esportivo = new Esportivo({
            idCarro: c._id,
            tp100km: req.body.tp100km,
            melhorias: req.body.melhorias
        }); 

        esportivo.save(esportivo).then(data => {
            res.send(data);

        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao tentar inserir os dados do carro esportivo: ${esportivo}.` })
        })

    }

}