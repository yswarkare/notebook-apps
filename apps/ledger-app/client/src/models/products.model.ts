import { object, string } from 'yup';

export const productSchema = object({
  id: string().trim(),
  name: string().min(3).max(150).trim().required(),
  description: string().min(3).max(255).trim(),
});

export type ProductType = {
  id: string;
  name: string;
  description: string;
};

export const createProductSchema = object({
  name: string().min(3).max(150).trim().required(),
  description: string().min(3).max(255).trim(),
});

export type CreateProductType = {
  name: string;
  description: string;
};
