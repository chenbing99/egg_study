const { Sequelize, DataTypes } = require("sequelize");
// const mysql = require("mysql");
const conf = {
  host: "localhost",
  port: "3306",
  dialect: "mysql", // 要连接什么类型的数据库
};
const seq = new Sequelize("egg_mysql", "root", "root", conf);

// 测试连接是否成功
// (async () => {
//     try {
//         await mysql.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })();   // 多一个括号表示调用方法
// 将连接对象暴露出去
module.exports = seq;
