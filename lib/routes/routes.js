"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _koaRouter = _interopRequireDefault(require("koa-router"));
var productHandlers = _interopRequireWildcard(require("../handlers/products/productHandlers"));
var productInputMiddleware = _interopRequireWildcard(require("../middleware/productInputMiddleware"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = new _koaRouter.default({
  prefix: "/api"
});
router.get("/products", productHandlers.getBooks);
router.get("/products/:id", productHandlers.getOne);
router.post("/products", productInputMiddleware.productInputMiddleware, productHandlers.createOne);
router.put("/products/:id", productInputMiddleware.productUpdateMiddleware, productHandlers.updateOne);
router.delete("/products/:id", productHandlers.removeOne);
var _default = exports.default = router;
//# sourceMappingURL=routes.js.map