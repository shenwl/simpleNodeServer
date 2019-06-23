const jwt = require('jsonwebtoken');


const findMembers = function (instance, {
  prefix,
  specifiedType,
  filter
}) {
  function _find(instance) {
    if (instance.__proto__ === null) return [];

    let names = Reflect.ownKeys(instance);

    // 过滤掉不满足条件的属性或方法
    names = names.filter(name => _shouldKeep(name));

    return [...names, ..._find(instance.__proto__)];
  }

  function _shouldKeep(name) {
    if (filter && filter(name)) return true;

    if (prefix && name.startsWith(prefix)) return true;

    if (specifiedType && (instance[name] instanceof specifiedType)) return true;

    return false;
  }

  return _find(instance);
};

const generateToken = function (uid, scope) {
  const secretKey = global.config.security.secretKey;
  const expiresIn = global.config.security.expiresIn;
  const token = jwt.sign({
    uid,
    scope
  }, secretKey, {
    expiresIn
  });
  return token;
};

module.exports = {
  findMembers,
  generateToken,
};
