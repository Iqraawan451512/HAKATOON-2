import { defineType } from "sanity";

// Step 1: Define a TypeScript interface for Product
export interface Product {
  title: string;
  description: string;
  price: number;
  productImage: { asset: { _ref: string } };  // Sanity image type
  tags?: string[];
  dicountPercentage?: number;
  isNew?: boolean;
}

// Step 2: Define the Sanity schema for the product
export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (rule) => rule.required() },
    { name: "description", title: "Description", type: "text", validation: (rule) => rule.required() },
    { name: "productImage", title: "Product Image", type: "image", validation: (rule) => rule.required() },
    { name: "price", title: "Price", type: "number", validation: (rule) => rule.required() },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "dicountPercentage", title: "Discount Percentage", type: "number" },
    { name: "isNew", title: "New Badge", type: "boolean" },
  ]
});
