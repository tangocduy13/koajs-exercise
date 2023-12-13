import writeToFile from "../helpers/writeToFile";
const products = require("./products.json");
import pickByFields from "../helpers/pickByFields";

export function getAll(limit, sort) {
  //todo: chỗ này nếu mà chỉ có 1 trong 2 điều kiện thôi thì sao ? nghiên cứu tách chỗ này ra nhé , hoặc có thể nhiều hơn 2 điều kiện chẳng hạn
  let productList = products;
  if (sort) {
    productList.sort((a, b) => {
      if (sort === "desc") return new Date(b.createdAt) - new Date(a.createdAt);
      else if (sort === "asc")
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }
  if (limit) {
    productList = productList.slice(0, parseInt(limit));
  }
  return productList;
}

export function getOne(id, fields) {
  //todo: chỗ này viết cho anh 1 hàm pickFields , để có thể pick những fields cần thiết thôi , tại sau này có thể mình sẽ không pick 1 số field chẳng hạn như token
  const product = products.find((product) => product.id === id);
  if (fields) {
    const fieldArray = fields.split(",");
    return pickByFields(product, fieldArray);
  }
  return product;
}

export function create(data) {
  const updatedProducts = [data, ...products];
  writeToFile(updatedProducts);
}

export function update(data) {
  const index = products.findIndex((product) => product.id === data.id);
  if (index !== -1) {
    products[index] = data;
    writeToFile(products);
  }
}

export function remove(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    writeToFile(products);
  }
}
