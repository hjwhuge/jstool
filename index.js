// JS工具函数整理，花荣整理

//
/**
 * 来源：https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * 说明：比较连个object的不同，并返回不相同的具体内容，基于lodash
 */
/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
var _ = require("lodash");
function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
}

const cookie = {
  // 写cookies
  setCookie: function (name, value) {
    let days = 1;
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  },
  // 读取cookies
  readCookie: function (name) {
    let arr = null;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (document.cookie && (arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  // 删除cookies
  delCookie: function (name) {
    let cval = this.readCookie(name);
    if (cval != null) {
      document.cookie =
        name + "=" + cval + ";expires=" + new Date(0).toGMTString();
    }
  },
};

export default cookie;
