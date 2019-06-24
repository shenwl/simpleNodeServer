const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');

// models
require('./app/models/user');

const app = new Koa();

app.use(bodyParser());
app.use(catchError);

InitManager.initCore(app);

app.listen(2333, () => {
  // eslint-disable-next-line no-console
  console.log(`server running at http://localhost:2333`);
});
