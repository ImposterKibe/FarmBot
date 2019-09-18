const Sequelize = require('sequelize')

const sequelize = new Sequelize ('mysql://root:@localhost:3306/firstdb')

const User = sequelize.define('User',{
    id:{ 
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    password: {
        type:Sequelize.STRING
    }

})

module.exports = User
