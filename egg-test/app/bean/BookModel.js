const { Sequelize } = require("sequelize");
const { STRING, INTEGER } = Sequelize;
// 将数据库连接对象导入
const sequelize = require("../config/MysqlConnection");

// 测试代码 导入对象成功
console.log("---------", sequelize);

// 创建模型
const Book = sequelize.define(
  "users",
  {
    id: { type: STRING, primaryKey: true },
    username: STRING(255),
    nickname: STRING(255),
    avatar: STRING(255),
    sex: INTEGER(11),
    age: INTEGER(11),
    money: INTEGER(11),
  },
  {
    timestamps: false, //自动增加创建时间
    tableName: "users", //设置表名称
  }
);
// 导出模型
module.exports = Book;
