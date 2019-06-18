module.exports = (form, validatorConfig) => {
  if(!form || !validatorConfig) return;

  Object.keys(validatorConfig).forEach(key => {
    const formItem = form[key];
    const validator = validatorConfig[key];

    if (validator.required) {

    }
  })
}
