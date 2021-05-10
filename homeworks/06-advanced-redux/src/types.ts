export type Pizza = {
    name: string;
    price: number;
    _id: string;
}

export type BasketState = Array<Pizza & { count: number; }>;

export type State = {
    pizza: Pizza[];
    basket: BasketState;
}
