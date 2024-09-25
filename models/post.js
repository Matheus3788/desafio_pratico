const db = require("./banco")


const Clientes = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING

    },
    bairro: {
        type: db.Sequelize.STRING

    },
    cep: {
        type: db.Sequelize.STRING

    },
    cidade: {
        type: db.Sequelize.STRING

    },
    estado: {
        type: db.Sequelize.STRING

    }
})


// Clientes.create({
//     nome: "Matheus",
//     endereco: "AV aguia",
//     bairro: "São Miguel",
//     cep: "10",
//     cidade: "São Paulo",
//     estado: "SP"
// })

module.exports = Clientes


