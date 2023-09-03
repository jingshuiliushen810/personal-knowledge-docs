'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx }  = this;
    ctx.returnBody(true, { test: 'success' });
  }
}

module.exports = HomeController;
