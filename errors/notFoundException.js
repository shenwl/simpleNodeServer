const HttpException = require('./httpException');

const ERROR_CODE = 40400;

class ResourceNotFoundError extends HttpException {
  constructor(resourceName, resourceId, httpMsg = '未找到资源') {
    super(404, httpMsg, ERROR_CODE, `${resourceName}资源未找到, 资源id: ${resourceId}`);
  }
}

module.exports = ResourceNotFoundError;
