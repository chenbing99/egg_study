/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1668137110158_9609";
  // add your middleware config here
  config.middleware = [];
  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ["*"],
  };
  /* 连接mysql配置 */
  config.sequelize = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "egg_mysql",
    username: "root",
    password: "root",
  };
  /* 配置允许跨域 */
  config.cors = {
    credentials: true,
    origin: "*", //允许任何跨域，若只允许个别IP跨域，则：origin:['http://localhost:8080']
    allowMethods: "GET,PUT,POST,DELETE", // 被允许的请求方式
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
