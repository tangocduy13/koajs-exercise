"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.getAll = getAll;
exports.getOne = getOne;
exports.remove = remove;
exports.update = update;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const products = require("./products.json");
function getAll() {
  return products;
}
function getOne(id) {
  return products.find(product => product.id === id);
}
function create(data) {
  const updatedProducts = [data, ...products];
  return _fs.default.writeFileSync("./src/database/products.json", JSON.stringify(updatedProducts));
}
function update(data) {
  const index = products.findIndex(product => product.id === data.id);
  if (index !== -1) {
    products[index] = data;
    return _fs.default.writeFileSync("./src/database/products.json", JSON.stringify(products));
  }
}
function remove(id) {
  const index = products.findIndex(product => product.id === id);
  console.log(index);
  if (index !== -1) {
    products.splice(index, 1);
    console.log(products);
    return _fs.default.writeFileSync("./src/database/products.json", JSON.stringify(products));
  }
}
//# sourceMappingURL=productRepository.js.map