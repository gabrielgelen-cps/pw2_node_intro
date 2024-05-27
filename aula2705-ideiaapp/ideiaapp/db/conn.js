const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias_db', 'gabrielgelen', 'Ri6287216', {
    host: 'dadosappideiasgelen.mysql.database.azure.com',
    dialect: 'mysql',
    ssl:true
})

try {
    sequelize.authenticate()
    console.log('Conectado ao servidor Azure MySQL!')
} catch (error) {
    console.error('Error MySQL: ', error)
}

module.exports = sequelize