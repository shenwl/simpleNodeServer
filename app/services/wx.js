const util = require('util');
const axios = require('axios');

const User = require('../models/user');
const { generateToken } = require('../../core/utils');
const AUTH = require('../constants/auth');
const { AuthFailed } = require('../../exceptions');

class WXService {
  static async codeToToken(code) {
    // code由微信生成
    // 调用微信的服务验证code后得到openid 参数：code, appid, appsecret
    const url = util.format(
      global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code);

    const ret = await axios.get(url);

    if(ret.status !== 200) throw new AuthFailed('openid获取失败');

    if(ret.data.errcode !== 0) throw new AuthFailed(`openid获取失败: ${ret.data.errmsg}`);

    const { openid } = ret.data;
    const user = await User.findByOpenid(openid) || await User.registerByOpenid(openid);

    return generateToken(user.id, AUTH.USER);
  }
}

module.exports = WXService;
