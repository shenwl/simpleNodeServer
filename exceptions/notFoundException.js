const HttpException = require('./httpException');

const ERROR_CODE = 40400;

class ResourceNotFoundError extends HttpException {
  constructor(resourceName, resourceId) {
    super(404, ERROR_CODE, `${resourceName}资源未找到, 资源id: ${resourceId}`);
  }
}

module.exports = ResourceNotFoundError;
