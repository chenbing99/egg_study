// app/service/users.js

"use strict";

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
}

module.exports = UsersService;
