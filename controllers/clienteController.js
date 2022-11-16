const Cliente = require("../models/cliente");

module.exports = class PessoaController {

    static async inserir(req, res) {
        console.log(req.body)

        const cliente = new Cliente({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            nuCarteiraMotorista: req.body.nuCarteiraMotorista,
            anoVencimentoCarteira: req.body.anoVencimentoCarteira
        });

        cliente.save(cliente).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados da cliente: ${cliente}.`
            });
        });
    }

}