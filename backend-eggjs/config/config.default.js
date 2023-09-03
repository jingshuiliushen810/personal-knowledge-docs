/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1693645008786_2018';
  

  // add your middleware config here
	config.middleware = [ 'errorHandler'];

  // 统一错误信息配置（注：match和ignore不可以同时配置）
	config.errorHandler = {
		enable: true, // 中间件开启配置
		match: '', // 设置请求中间件的请求路由
		// ignore: '', // 设置不经过这个中间件的请求路由
	};

  // 密码加密
  config.crypto = {
    secret: 'Z#fOGf$te4^J28l1Z&$#fXCNifv!ZHQnEG'
  };

  // 关掉 csrf。Egg 内置的 egg-security 插件默认对所有『非安全』的方法，例如 POST，PUT，DELETE 都进行 CSRF 校验。
  config.security = {
    csrf: {
      enable: false,
    },
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
