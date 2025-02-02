import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "@/sanity/schemaTypes/Products";
import { categorySchema } from "@/sanity/schemaTypes/categtories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};