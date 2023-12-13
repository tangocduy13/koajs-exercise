import {
  getList as getListProducts,
  getOne as getOneProduct,
  create as createProduct,
  update as updateProduct,
  remove as removeProduct,
} from "../../database/productRepository";

export async function getProducts(ctx) {
  try {
    const { limit, sort } = ctx.request.query;
    const products = getListProducts({ limit, sort });

    ctx.body = {
      data: products,
      count: products.length,
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
    const id = ctx.params.id;
    const fields = ctx.query.fields;

    const product = getOneProduct({ id, fields });
    if (!product) {
      ctx.throw(404, "Product Not Found", { data: [], success: false });
      return;
    }
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
    ctx.status = 200;
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
    const id = ctx.params.id;
    removeProduct({ id });
    ctx.status = 200;
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
