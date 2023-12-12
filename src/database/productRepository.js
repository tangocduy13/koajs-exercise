import fs from "fs";
import writeToFile from "../helpers/writeToFile";
const products = require("./products.json");

export function getAll(limit, sort) {
  return products
    .sort((a, b) => {
      if (sort === "desc") return new Date(b.createdAt) - new Date(a.createdAt);
      else if (sort === "asc")
        return new Date(a.createdAt) - new Date(b.createdAt);
    })
    .slice(0, parseInt(limit) || products.length);
}

export function getOne(id) {
  return products.find((product) => product.id === id);
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
