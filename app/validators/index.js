const { ParamValidator, Rule } = require('../../core/paramValidator');

class RegisterValidator extends ParamValidator {
  constructor() {
    super();
    this.email = [
      new Rule('isEmail', 'email不符合规范')
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
}

module.exports = {
  RegisterValidator,
};
