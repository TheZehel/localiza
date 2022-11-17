const reserva = require("../models/reserva");
const Reserva = require("../models/reserva");

module.exports = class ReservaController {

    static async inserir(req, res) {
        console.log(req.body)

        const reserva = new Reserva({
            placaCarro: req.body.placaCarro,
            cpfCliente: req.body.cpfCliente,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim,
        });

        reserva.save(reserva).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados da reserva: ${reserva}.`
            });
        });
    }

    static async buscar(req, res){
        console.log(req.body);
        
        reserva.findOne({ cpfCliente: req.body.cpfCliente }).then(data => {
            if(!data) {
                return res.status(404).json({'mensagem':`reserva pelo cpf cliente ${req.body.cpfCliente} não encontrada.`});
            }

            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar buscar os dados da reserva pelo cpf: ${cpfCliente}.`
            });
        });

    }

}