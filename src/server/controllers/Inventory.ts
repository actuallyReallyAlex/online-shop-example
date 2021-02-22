import express, { Router, Request, Response } from "express";
import { Product } from "../../types";

const inventory: Product[] = [
  {
    description: "This is a thing.",
    id: "0",
    imageUrl: "https://picsum.photos/200?random=1",
    price: 10.5,
    quantity: 10,
    title: "Cool Product",
  },
  {
    description: "This is something else.",
    id: "1",
    imageUrl: "https://picsum.photos/200?random=2",
    price: 5.73,
    quantity: 1000,
    title: "Super Cool Product",
  },
  {
    description: "This is the last thing",
    id: "2",
    imageUrl: "https://picsum.photos/200?random=3",
    price: 3.19,
    quantity: 50,
    title: "Dull Thing",
  },
];

class AssetsController {
  public router: Router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get("/inventory", async (req: Request, res: Response) => {
      try {
        res.send(inventory);
      } catch (error) {
        console.error(error);
        return res.status(500).send();
      }
    });
  }
}

export default AssetsController;
