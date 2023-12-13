"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(products, propertie, search) {
  return products.filter(product => product[propertie] === search);
}
//# sourceMappingURL=getByField.js.map