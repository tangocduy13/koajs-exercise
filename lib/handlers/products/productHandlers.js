"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOne = createOne;
exports.getBooks = getBooks;
exports.getOne = getOne;
exports.removeOne = removeOne;
exports.updateOne = updateOne;
var _productRepository = require("../../database/productRepository");
async function getBooks(ctx) {
  try {
    const products = (0, _productRepository.getAll)();
    const {
      limit,
      sort
    } = ctx.request.query;
    const docs = products.sort((a, b) => {
      if (sort === "desc") return new Date(b.createdAt) - new Date(a.createdAt);else if (sort === "asc") return new Date(a.createdAt) - new Date(b.createdAt);
    }).slice(0, parseInt(limit) || products.length);
    ctx.body = {
      data: docs,
      count: docs.length
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
    const product = (0, _productRepository.getOne)(id);
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
    console.log(mergeData);
    // updateProduct(mergeData);
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