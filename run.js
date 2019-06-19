const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');

const app = new Koa();

app.use(bodyParser());
app.use(catchError);

InitManager.initCore(app);

app.listen(2333, () => {
  console.log(`server running at http://localhost:2333`)
});
