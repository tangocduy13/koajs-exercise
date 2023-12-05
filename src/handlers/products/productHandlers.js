import {
  getAll as getAllProducts,
  getOne as getOneProduct,
  create as createProduct,
  update as updateProduct,
  remove as removeProduct,
} from "../../database/productRepository";

export async function getProducts(ctx) {
  try {
    const products = getAllProducts();
    const { limit, sort } = ctx.request.query;

    const docs = products
      .sort((a, b) => {
        if (sort === "desc")
          return new Date(b.createdAt) - new Date(a.createdAt);
        else if (sort === "asc")
          return new Date(a.createdAt) - new Date(b.createdAt);
      })
      .slice(0, parseInt(limit) || products.length);
    ctx.body = {
      data: docs,
      count: docs.length,
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

export async function getOne(ctx) {
  try {
    const { id } = ctx.request.params;
    const product = getOneProduct(id);
    ctx.body = {
      data: product,
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

export async function createOne(ctx) {
  try {
    const postData = ctx.request.body;
    createProduct(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message,
    };
  }
}

export async function updateOne(ctx) {
  try {
    const data = ctx.request.body;
    const id = ctx.request.params;
    const mergeData = {
      ...id,
      ...data,
    };
    updateProduct(mergeData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message,
    };
  }
}

export async function removeOne(ctx) {
  try {
    const { id } = ctx.request.params;
    removeProduct(id);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: e.message,
    };
  }
}
