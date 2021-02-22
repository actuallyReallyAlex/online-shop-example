import { Router } from "express";
import { Store } from "redux";
import { Saga, Task } from "redux-saga";

export interface ApplicationState {
  appIsReady: boolean;
}

export type Controller = {
  router: Router;
};

export interface CounterState {
  count: number;
}

export interface CustomStore extends Store {
  runSaga: <S extends Saga<any[]>>(saga: S, ...args: Parameters<S>) => Task;
}

export type Domain = string | undefined;

export interface InventoryState {
  products: Product[];
}

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
  inventory: InventoryState;
}
