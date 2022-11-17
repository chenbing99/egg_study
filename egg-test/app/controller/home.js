"use strict";

const Book = require("../bean/BookModel");
const sequelize = require("../config/MysqlConnection");
// 使用 build 新建一个BookModel对象
// create方法：将 build 与 save 合二为一
// (async () => {
//   await Book.create({
//     username: "STRING(255)",
//     nickname: "STRING(255)",
//     avatar: "STRING(255)",
//     sex: 1,
//     age: 11,
//     money: 1111,
//   })
//     .then(() => {
//       console.log("操作成功");
//     })
//     .catch((error) => {
//       console.log("操作失败！\n" + error);
//     });
// })();

// const t = await sequelize.transaction();

// const Book = require('./BookModel');

async function addBook() {
  try {
    const result = await sequelize.transaction(async (t) => {
      const book = await Book.create(
        {
          username: "testTransaction",
        },
        { transaction: t }
      );
      // throw new Error();
      return book; // 如果执行到此行,则表示事务已成功提交,`result`是事务返回的结果，这种情况下，result 中的数据就是 user
    });
  } catch (error) {
    console.log("数据回滚\n" + error);
  }
}
// 执行 addBook() 方法
addBook();
