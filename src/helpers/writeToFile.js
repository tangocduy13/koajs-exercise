import fs from "fs";

export default function writeToFile(data) {
  return fs.writeFileSync("./lib/database/products.json", JSON.stringify(data));
}
