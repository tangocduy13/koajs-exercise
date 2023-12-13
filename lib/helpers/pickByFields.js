"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pickFields;
function pickFields(object, keys) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
//# sourceMappingURL=pickByFields.js.map