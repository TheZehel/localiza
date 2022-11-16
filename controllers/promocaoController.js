const Promocao = require('../models/promocao')

module.exports = class PromocaoController {

    static async inserir(req, res ){
        console.log(req.body);

        const promocao = new Promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        }); 

        promocao.save(promocao).then(data => {
            res.send(data);

        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao tentar inserir os dados da promoçao: ${promocao}.` })
        })

    }

}