"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOne = createOne;
exports.getOne = getOne;
exports.getProducts = getProducts;
exports.removeOne = removeOne;
exports.updateOne = updateOne;
var _productRepository = require("../../database/productRepository");
async function getProducts(ctx) {
  try {
    const {
      limit,
      sort
    } = ctx.request.query;
    const products = (0, _productRepository.getAll)(limit, sort);
    ctx.body = {
      data: products,
      count: products.length
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message
    };
  }
}
async function getOne(ctx) {
  try {
    const {
      id
    } = ctx.request.params;
    const fields = ctx.query.fields;
    const product = (0, _productRepository.getOne)(id, fields);
    if (!product) {
      ctx.throw(404, "Product Not Found", {
        data: [],
        success: false
      });
      return;
    }
    ctx.body = {
      data: product
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message
    };
  }
}
async function createOne(ctx) {
  try {
    const postData = ctx.request.body;
    (0, _productRepository.create)(postData);
    ctx.status = 201;
    return ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message
    };
  }
}
async function updateOne(ctx) {
  try {
    const data = ctx.request.body;
    const id = ctx.request.params;
    const mergeData = {
      ...id,
      ...data
    };
    (0, _productRepository.update)(mergeData);
    ctx.status = 201;
    return ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message
    };
  }
}
async function removeOne(ctx) {
  try {
    const {
      id
    } = ctx.request.params;
    (0, _productRepository.remove)(id);
    ctx.status = 201;
    return ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message
    };
  }
}
//# sourceMappingURL=productHandlers.js.map