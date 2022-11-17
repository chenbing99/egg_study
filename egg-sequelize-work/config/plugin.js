"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 引入egg-sequelize包
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  //引入egg-cors包
  cors: {
    enable: true,
    package: "egg-cors",
  },
};
