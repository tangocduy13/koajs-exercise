import Router from "koa-router";
import * as productHandlers from "../handlers/products/productHandlers";
import * as productInputMiddleware from "../middleware/productInputMiddleware";

const router = new Router({
  prefix: "/api",
});

router.get("/products", productHandlers.getProducts);
router.get("/products/:id", productHandlers.getOne);
router.post(
  "/products",
  productInputMiddleware.productInputMiddleware,
  productHandlers.createOne
);
router.put(
  "/products/:id",
  productInputMiddleware.productUpdateMiddleware,
  productHandlers.updateOne
);
router.delete("/products/:id", productHandlers.removeOne);

export default router;
