// app/service/users.js
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("egg_mysql", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
("use strict");

const BaseService = require("./base");

class UsersService extends BaseService {
  //查询所有数据
  async findAll() {
    let data = await this._findAll("Users");
    let total = await this._count("Users");
    return { total, data };
  }
  //根据ID查询数据
  async findById(id) {
    return await this._findById("Users", id);
  }

  //新增数据
  async add(json) {
    console.log("json---", json);
    return await this._add("Users", json);
  }

  //编辑数据
  async edit(json) {
    console.log("data----", json);
    let data = await this._edit("Users", json);
    if (!data) return "Id传入有误";
    return data;
  }

  //删除数据
  async del(id) {
    let data = await this._delete("Users", id);
    if (!data) return "Id传入有误";
    return data;
  }
  // 变更金额
  // async transfer(id, id1, amount) {
  //   const { ctx } = this;
  //   try {
  //     console.log("id----", id);
  //     const result = await ctx.model["Users"].findByPk(id);
  //     console.log("-----", result);
  //     if (!result) return false;
  //     await result.update({ money: result.dataValues.money - amount });
  //     const result1 = await ctx.model["Users"].findByPk(id1);
  //     console.log("-----", result);
  //     if (!result1) return false;
  //     await result1.update({
  //       money: Number(result1.dataValues.money) + Number(amount),
  //     });
  //     return true;
  //   } catch (error) {
  //     return "Server error";
  //   }
  // }
  // async transfer(id, id1, amount) {
  //   const { ctx } = this;
  //   const result = await ctx.model["Users"].findByPk(id);
  //   const result1 = await ctx.model["Users"].findByPk(id1);
  //   console.log("sequelize", sequelize);
  //   return sequelize.transaction(async function (t) {
  //     await result
  //       .update({ money: result.dataValues.money - amount }, { transaction: t })
  //       .then((res) => {
  //         console.log("减金额成功");
  //       });
  //     await result1
  //       .update(
  //         {
  //           money: Number(result1.dataValues.money) + Number(amount),
  //         },
  //         { transaction: t }
  //       )
  //       .then((res) => {
  //         console.log("加金额成功");
  //         throw new Error();
  //       });
  //     // return true;
  //   });
  // }

  // 非托管事务 在必要时手动提交和回滚事务.
  // async transfer(id, id1, amount) {
  //   const { ctx } = this;
  //   const result = await ctx.model["Users"].findByPk(id);
  //   const result1 = await ctx.model["Users"].findByPk(id1);
  //   // 首先,我们开始一个事务并将其保存到变量中
  //   const t = await sequelize.transaction();
  //   try {
  //     await result.update(
  //       { money: result.dataValues.money - amount },
  //       { transaction: t }
  //     );
  //     await result1.update(
  //       {
  //         money: Number(result1.dataValues.money) + Number(amount),
  //       },
  //       { transaction: t }
  //     );
  //     throw new Error(); // 即使数据库操作成功 , 此条语句依然会回滚
  //     // await t.commit();
  //   } catch (error) {
  //     console.log("回滚");
  //     await t.rollback();
  //   }
  // }
  // 托管事务 自动处理提交或回滚事务. 通过将回调传递给 sequelize.transaction 来启动托管事务
  // 如果你的回调抛出错误,Sequelize 将自动回滚事务
  // 如果你的回调成功,Sequelize 将自动提交事务
  // async transfer(id, id1, amount) {
  //   const { ctx } = this;
  //   const result = await ctx.model["Users"].findByPk(id);
  //   const result1 = await ctx.model["Users"].findByPk(id1);
  //   let transaction = null;
  //   try {
  //     transaction = await sequelize.transaction(async (t) => {
  //       await result.update(
  //         { money: result.dataValues.money - amount },
  //         { transaction: t }
  //       );
  //       await result1.update(
  //         {
  //           money: Number(result1.dataValues.money) + Number(amount),
  //         },
  //         { transaction: t }
  //       );
  //     });
  //   } catch (error) {
  //     console.log("回滚");
  //   }
  // }
  // 抛出错误以回滚
  async transfer(id, id1, amount) {
    const { ctx } = this;
    const result = await ctx.model["Users"].findByPk(id);
    const result1 = await ctx.model["Users"].findByPk(id1);
    let transaction = null;
    try {
      transaction = await sequelize.transaction(async (t) => {
        await result.update(
          { money: result.dataValues.money - amount },
          { transaction: t }
        );
        await result1.update(
          {
            money: Number(result1.dataValues.money) + Number(amount),
          },
          { transaction: t }
        );
        throw new Error(); // 即使数据库操作成功 , 此条语句依然会回滚
      });
    } catch (error) {
      console.log("回滚");
    }
  }
}

module.exports = UsersService;
