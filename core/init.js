const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.loadRouters();
  }

  static loadRouters() {
    const apiDir = `${process.cwd()}/app/api`;

    requireDirectory(module, apiDir, {
      visit: (module) => {
        if(module instanceof Router) {
          InitManager.app.use(module.routes());
        }
      }
    });
  }
}

module.exports = InitManager;
