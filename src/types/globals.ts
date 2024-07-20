export interface DataProducts {
  message: string;
  data: {
    _id: string;
    name: string;
    category: string;
    service: string;
    total: number;
    price: number;
    status: string;
  }[];
}

export interface DataOrders {
  message: string;
  paymentUrl: string;
  data: {
    _id: string;
    product: string;
    gameId: string;
    status: string;
  };
}
