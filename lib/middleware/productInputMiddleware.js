"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productInputMiddleware = productInputMiddleware;
exports.productUpdateMiddleware = productUpdateMiddleware;
var yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function productInputMiddleware(ctx, next) {
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
      image: yup.string().required()
    });
    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name
    };
  }
}
async function productUpdateMiddleware(ctx, next) {
  try {
    const data = ctx.request.body;
    const id = ctx.request.params;
    const postData = {
      ...id,
      ...data
    };
    let schema = yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      price: yup.number().positive().required(),
      description: yup.string().required(),
      product: yup.string().required(),
      color: yup.string().required(),
      createdAt: yup.date().required(),
      image: yup.string().required()
    });
    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name
    };
  }
}
//# sourceMappingURL=productInputMiddleware.js.map