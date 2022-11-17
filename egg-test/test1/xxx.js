const { Sequelize, DataTypes } = require("sequelize");
// const mysql = require("mysql");
const conf = {
  host: "localhost",
  port: "3306",
  dialect: "mysql", // 要连接什么类型的数据库
};
const seq = new Sequelize("egg_mysql", "root", "root", conf);
try {
  seq.authenticate();
  console.log(" successfully.");
} catch (error) {
  console.error(error);
}
