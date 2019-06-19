const HttpException = require('./httpException');

const ERROR_CODE = 40400;

class ResourceNotFoundError extends HttpException {
  constructor(resourceName, resourceId, httpMsg) {
    super(404, `${httpMsg}`, ERROR_CODE, `${resourceName} not found, id: ${resourceId}`);
  }
}

module.exports = ResourceNotFoundError;
