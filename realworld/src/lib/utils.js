const isEmptyObject = param => Object.keys(param).length === 0 && param.constructor === Object;
const checkUsernameRegex = param => /^[a-zA-Z]{4,20}$/.test(param);
const checkPasswordRegex = param => /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(param);
const checkEmailRegex = param => /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(param);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const guid = () => {
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

export {
    isEmptyObject,
    checkUsernameRegex,
    checkPasswordRegex,
    checkEmailRegex,
    capitalize,
    guid,
}