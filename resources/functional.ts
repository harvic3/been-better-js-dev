// This is a functional programming example basic in some OOP concepts
export type OrderType = {
  id: string;
  products: string[];
  total: number;
};

// Class module focused on functional programming
export class OrderService {
  static create(order: OrderType): OrderType {
    throw new Error("Method not implemented.");
  }

  static find(orderId: string): OrderType {
    throw new Error("Method not implemented.");
  }

  static update(order: OrderType): OrderType {
    throw new Error("Method not implemented.");
  }
}

// How to use it
// import { OrderService } from "./resources/orders";
const myOrder = OrderService.create({ id: "1", products: ["product1", "product2"], total: 100 });

// Functional pure extreme
// Every function is a file or every group of function is a file
export function createOrder(order: OrderType): OrderType {
  throw new Error("Method not implemented.");
}

export function findOrder(orderId: string): OrderType {
  throw new Error("Method not implemented.");
}

export function updateOrder(order: OrderType): OrderType {
  throw new Error("Method not implemented.");
}

// How to use it
// import { createOrder, findOrder, updateOrder } from "./resources/orders";
