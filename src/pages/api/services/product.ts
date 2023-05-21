import Product from "../models/Product"

export const getAll: Function = async () => {
  const products = await Product.find();
  return products;
};
