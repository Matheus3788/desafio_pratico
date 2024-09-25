const Sequelize = require("sequelize")
const sequelize = new Sequelize ("desafio_pratico", "root","",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


