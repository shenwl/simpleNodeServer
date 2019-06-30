const LOGIN_TYPES = {
  // 小程序
  USER_MINI_PROGRAM: 100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
};

const inLoginTypes = (val) => {
  for (let key in LOGIN_TYPES) {
    if (LOGIN_TYPES[key] === val) {
      return true;
    }
  }
  return false;
};

const ART = {
  MOVIE: 1,
  MUSIC: 2,
  SENTENCE: 3,
};

module.exports = {
  LOGIN_TYPES,
  ART,
  inLoginTypes,
};
