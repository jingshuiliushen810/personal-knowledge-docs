'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // test middleware success
  // const mytest = app.middleware.mytest();
  // router.get('/', mytest, controller.home.index);

  const { router, controller, middleware } = app;
  
  const auth = middleware.auth();

  
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);

  // 认证
  router.post('/auth/register', controller.auth.register);
  router.post('/auth/login', controller.auth.login);
};
