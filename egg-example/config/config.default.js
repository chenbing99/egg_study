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
  config.mysql = {
    client: {
      // host
      host: "127.0.0.1",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "root",
      // 数据库名
      database: "node_test",
    },
    app: true,
    agent: false,
  };
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
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
