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
var _writeToFile = _interopRequireDefault(require("../helpers/writeToFile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const products = require("./products.json");
function getAll(limit, sort) {
  return products.sort((a, b) => {
    if (sort === "desc") return new Date(b.createdAt) - new Date(a.createdAt);else if (sort === "asc") return new Date(a.createdAt) - new Date(b.createdAt);
  }).slice(0, parseInt(limit) || products.length);
}
function getOne(id) {
  return products.find(product => product.id === id);
}
function create(data) {
  const updatedProducts = [data, ...products];
  (0, _writeToFile.default)(updatedProducts);
}
function update(data) {
  const index = products.findIndex(product => product.id === data.id);
  if (index !== -1) {
    products[index] = data;
    (0, _writeToFile.default)(products);
  }
}
function remove(id) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    (0, _writeToFile.default)(products);
  }
}
//# sourceMappingURL=productRepository.js.map