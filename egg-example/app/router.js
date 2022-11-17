"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/user", controller.user.user);
  router.post("/add_user", controller.user.add_user);
  router.post("/update_user", controller.user.update_user);
  router.post("/delete_user", controller.user.delete_user);
};
