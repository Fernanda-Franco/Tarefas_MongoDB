const { model, Schema } = require ("mongoose");

const  Tarefa = model(
    "tarefa", //nome do modelo (base / coleção)
    new Schema({
        //validação do documento
        titulo: {
            type: String, //String, number, boolean
            require: true,
        },
        descricao: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            require: true,
            default: "pendente"
        },
    })
);
module.exports = Tarefa;