const { ParamValidator, Rule } = require('../../core/paramValidator');
const User = require('../models/user');

class RegisterValidator extends ParamValidator {
  constructor() {
    super();
    this.email = [
      new Rule('isEmail', '邮箱不符合规范')
    ];
    this.password = [
      new Rule('isLength', '密码为6-32个字符', {
        min: 6,
        max: 32
      }),
      new Rule('matches', '密码必须包含字母和数字', '^(?![0-9]+$)(?![a-zA-Z]+$)')
    ];
    this.nickname = [
      new Rule('isLength', '昵称3-32个字符', {
        min: 3,
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

module.exports = {
  RegisterValidator,
};
