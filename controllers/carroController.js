const carro = require("../models/carro");
const Carro = require("../models/carro");

module.exports = class CarroController {
  static async inserir(req, res) {
    console.log(req.body);

    const carro = new Carro({
      placa: req.body.placa,
      ano: req.body.ano,
      modelo: req.body.modelo,
      tipo: req.body.tipo,
      quilometragem: req.body.quilometragem,
      diaria: req.body.diaria,
      observacao: req.body.observacao,
    });

    carro
      .save(carro)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res
          .status(500)
          .send({
            mensagem:
              error.message ||
              `Erro ao tentar inserir os dados do carro: ${carro}.`,
          });
      });
  }

  static async buscarPlaca(req, res) {
    console.log(req.body);

    Carro.findOne({ placa: req.body.placa })
      .then((data) => {
        if (!data) {
          return res
            .status(404)
            .json({
              mensagem: `carro pela placa ${req.body.placa} não encontrado.`,
            });
        }

        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            `Erro ao tentar buscar os dados do carro pela placa: ${placa}.`,
        });
      });
  }

  static async deletar(req, res) {
    console.log(req.body);

    const { id } = req.query;

    carro
      .findByIdAndRemove(id, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .json({ mensagem: `Carro pelo id: ${id} não encontrado.` });
        } else
          res.send({ mensagem: `Carro com o id: ${id} removido com sucesso!` });

        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            `Erro ao tentar deletar os dados do carro pelo id: ${id}.`,
        });
      });
  }
};
