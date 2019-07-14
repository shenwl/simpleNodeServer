const { ParamValidator, Rule } = require('../../core/paramValidator');
const User = require('../models/user');

const { inLoginTypes } = require('../constants/enum');

class RegisterValidator extends ParamValidator {
  constructor() {
    super();
    this.email = [
      new Rule('isEmail', '邮箱不符合规范')
    ];
    this.password = [
      new Rule('isLength', '密码至少6个字符', {
        min: 6,
        max: 128,
      }),
      new Rule('matches', '密码必须包含字母和数字', '^(?![0-9]+$)(?![a-zA-Z]+$)')
    ];
    this.nickname = [
      new Rule('isLength', '昵称3-32个字符', {
        min: 4,
        max: 32
      })
    ];
  }
  async validateEmail(vals) {
    const email = vals.body.email;
    const user = await User.findOne({
      where: {
        email,
      }
    });
    if (user) throw Error('邮箱已注册');
  }
}

class TokenValidator extends ParamValidator {
  constructor() {
    super();
    this.account = [
      new Rule('isLength', '账号不符合规范', {
        min: 4,
        max: 32,
      })
    ];
    // 小程序登录密码可以为空
    this.secret = [
      new Rule('isOptional'),
      new Rule('isLength', '密码至少6个字符', {
        min: 6,
        max: 128,
      }),
    ];
  }
  async validateLoginType(vals) {
    const type = vals.body.type;

    if (!type) throw Error('type是必填参数');
    if(!inLoginTypes(type)) throw Error('type不合法');
  }
}

class NotEmptyValidator extends ParamValidator {
  constructor() {
    super();
    this.token = [
      new Rule('isLength', '不允许为空', { min: 1 })
    ];
  }
}

class LikeValidator extends ParamValidator {
  constructor() {
    super();
    this.artId = [
      new Rule('isLength', '请传入作品id', { min: 1 })
    ];
    this.type = [
      new Rule('isInt', '请传入作品类型')
    ];
  }
}

module.exports = {
  RegisterValidator,
  TokenValidator,
  NotEmptyValidator,
  LikeValidator,
};
