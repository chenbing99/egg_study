"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
  // 查询用户
  async user() {
    const { ctx, app } = this;

    const userData = await ctx.service.user.user();
    ctx.body = userData;
  }
  // 新增用户
  async add_user() {
    const { ctx } = this;
    const { name, class_id, age } = ctx.request.body;
    try {
      const result = await ctx.service.user.add_user(name, class_id, age);
      ctx.body = {
        status: 200,
        desc: "新增成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        status: 500,
        desc: "新增失败",
        data: null,
      };
    }
  }
  // 更新用户
  async update_user() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      const result = await ctx.service.user.update_user(id, name);
      ctx.body = {
        status: 200,
        desc: "更新成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        status: 500,
        desc: "更新失败",
        data: null,
      };
    }
  }
  // 删除用户
  async delete_user() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      const result = await ctx.service.user.delete_user(id);
      ctx.body = {
        status: 200,
        desc: "删除成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        status: 500,
        desc: "删除失败",
        data: null,
      };
    }
  }
}

module.exports = HomeController;
