import * as yup from "yup";

export async function productInputMiddleware(ctx, next) {
  try {
    const postData = ctx.request.body;

    let schema = yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      price: yup.number().positive().required(),
      description: yup.string().required(),
      product: yup.string().required(),
      color: yup.string().required(),
      createdAt: yup.date().required(),
      image: yup.string().required(),
    });

    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    };
  }
}

export async function productUpdateMiddleware(ctx, next) {
  try {
    const data = ctx.request.body;
    const id = ctx.request.params;
    const postData = {
      ...id,
      ...data,
    };
    let schema = yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      price: yup.number().positive().required(),
      description: yup.string().required(),
      product: yup.string().required(),
      color: yup.string().required(),
      createdAt: yup.date().required(),
      image: yup.string().required(),
    });

    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    };
  }
}
