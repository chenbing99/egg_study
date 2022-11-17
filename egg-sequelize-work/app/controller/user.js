// app/controller/user.js
"use strict";

const BaseController = require("./base");

class UserController extends BaseController {
  //查询所有数据
  async findAll() {
    const { ctx, service } = this;
    let result = await service.user.findAll();
    this.success(result, "OK");
  }

  //根据ID查数据
  async findById() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    let result = await service.user.findById(id);
    this.success(result, "OK");
  }

  //新增数据
  async add() {
    const { ctx, service } = this;
    let { id, username, nickname, avatar, sex, age } = ctx.request.body;
    console.log(ctx.request.body);
    let result = await service.user.add({
      id: id,
      username,
      nickname,
      avatar,
      sex,
      age,
    });
    if (result === "Server error") this.error(0, result);
    this.success(1, result);
  }

  //修改数据
  async edit() {
    const { ctx, service } = this;
    let { id, username, nickname, avatar, sex, age } = ctx.request.body;
    console.log("ctx.request.body", ctx.request.body);
    let result = await service.user.edit({
      id,
      username,
      nickname,
      avatar,
      sex,
      age,
    });
    if (result === "Server error") this.error(0, result);
    this.success(1, result);
  }

  //删除数据
  async del() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    let result = await service.user.del(id);
    if (result === "Server error") this.error(0, result);
    this.success(1, result);
  }

  async transfer() {
    const { ctx, service } = this;
    let { id, id1, amount } = ctx.request.body;
    let result = await service.user.transfer(id, id1, amount);
    ctx.logger.debug("我debugctx");
    ctx.logger.info("我普通ctx");
    ctx.logger.warn("我警告ctx");
    ctx.logger.error("我错误ctx111");
    // console.log("返回---------------", this);
    if (result === "Server error") this.error(0, result);
    this.success(1, result);
  }
}

module.exports = UserController;
