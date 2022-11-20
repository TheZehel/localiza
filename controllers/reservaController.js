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

    static async atualizar(req, res){
        console.log(req.body);

        const { id } = req.query;

        Reserva.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
            if(!data) {
                res.status(404).send({ mensagem: `Não foi possivel encontrar a reserva pelo Id: ${id}` }); 
            } else res.send({ mensagem: `Reserva com o Id: ${id} foi atualizada com sucesso.` });

        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar atualizar os dados da reserva pelo id: ${id}`
            });
        })

    }

}