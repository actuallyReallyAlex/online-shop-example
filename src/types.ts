import { Router } from "express";

export type Controller = {
  router: Router;
};

export type Domain = string | undefined;

export interface Product {
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  quantity: number;
  title: string;
}
