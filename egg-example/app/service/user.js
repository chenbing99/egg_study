const Service = require("egg").Service;
class UserService extends Service {
  async user() {
    const { ctx, app } = this;
    // 获取的 sql 语句
    let sql =
      'SELECT  stu.* from student AS stu  LEFT JOIN teacher AS t ON  stu.class_id=t.class_id  where t.name="张"';
    try {
      // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async add_user(name, class_id, age) {
    const { ctx, app } = this;
    try {
      // 给 list 表，新增一条数据
      const result = await app.mysql.insert("student", {
        name,
        class_id,
        age,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async update_user(id, name) {
    const { ctx, app } = this;
    try {
      // 给 list 表，更新一条数据
      const result = await app.mysql.update(
        "student",
        { name },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async delete_user(id) {
    const { ctx, app } = this;
    try {
      // 给 list 表，删除一条数据
      const result = await app.mysql.delete("student", { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = UserService;
