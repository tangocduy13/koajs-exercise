import fs from "fs";
const products = require("./products.json");

export function getAll() {
  return products;
}

export function getOne(id) {
  return products.find((product) => product.id === id);
}

export function create(data) {
  const updatedProducts = [data, ...products];
  return fs.writeFileSync(
    "./src/database/products.json",
    JSON.stringify(updatedProducts)
  );
}

export function update(data) {
  const index = products.findIndex((product) => product.id === data.id);
  if (index !== -1) {
    products[index] = data;
    return fs.writeFileSync(
      "./src/database/products.json",
      JSON.stringify(products)
    );
  }
}

export function remove(id) {
  const index = products.findIndex((product) => product.id === id);
  console.log(index);
  if (index !== -1) {
    products.splice(index, 1);
    console.log(products);
    return fs.writeFileSync(
      "./src/database/products.json",
      JSON.stringify(products)
    );
  }
}
