import App from "./app";

import AssetsController from "./controllers/Assets";
import InventoryController from "./controllers/Inventory";

import { Controller } from "../types";

const main = async (): Promise<void> => {
  try {
    if (!process.env.PORT) throw new Error("No PORT");

    const controllers: Controller[] = [
      new AssetsController(),
      new InventoryController(),
    ];

    const app = new App(controllers, process.env.PORT);

    app.listen();
  } catch (error) {
    console.error(error);
  }
};

main();
