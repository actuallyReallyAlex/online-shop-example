import { Router } from "express";

export type Controller = {
  router: Router;
};

export interface CounterState {
  count: number;
}

export type Domain = string | undefined;

export interface Product {
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  quantity: number;
  title: string;
}

export interface RootState {
  counter: CounterState;
}
