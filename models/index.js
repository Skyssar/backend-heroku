const { Sequelize } = require('sequelize');
const UserModel = require('./users');

const sequelize = new Sequelize('j1z7rBGapx', 'j1z7rBGapx', 'Pz67Cat1po', {
    host: 'remotemysql.com',
    dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync ({ force: false })
    .then ( ()=>{
        console.log('tablas sincronizadas');
    });

module.exports = {
    User

}