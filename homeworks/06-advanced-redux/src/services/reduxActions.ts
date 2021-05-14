import {Pizza} from "../types";
import {Action, AnyAction} from "redux"

export interface PizzaViewedAction extends Action {
    type: "PIZZA_VIEWED",
    eventName: "PIZZA_VIEWED",
    pizzaList: Pizza[],
}

export type PizzaListAction = PizzaViewedAction | AnyAction;

interface PizzaAction extends Action {
    type: string,
    eventName: string,
    pizzaName: string,
    price: number,
}

interface PizzaRemovedFromBasketAction extends PizzaAction {
    type: "PIZZA_REMOVED_FROM_BASKET",
}

interface PizzaAddedToBasketAction extends PizzaAction {
    type: "PIZZA_ADDED_TO_BASKET",
}

interface PizzaSelectedAction extends PizzaAction {
    type: "PIZZA_SELECTED",
}

export type BasketAction = PizzaRemovedFromBasketAction | PizzaAddedToBasketAction | PizzaSelectedAction;

export const removePizzaFromBasket = (pizzaName: string, price: number): PizzaRemovedFromBasketAction => ({
    type: "PIZZA_REMOVED_FROM_BASKET",
    eventName: "PIZZA_REMOVED_FROM_BASKET",
    pizzaName: pizzaName,
    price: price,
});

export const addPizzaToBasket = (pizzaName: string, price: number): PizzaAddedToBasketAction => ({
    type: "PIZZA_ADDED_TO_BASKET",
    eventName: "PIZZA_ADDED_TO_BASKET",
    pizzaName: pizzaName,
    price: price,
});

export const selectPizza = (pizzaName: string, price: number): PizzaSelectedAction => ({
    type: "PIZZA_SELECTED",
    eventName: "PIZZA_SELECTED",
    pizzaName: pizzaName,
    price: price,
});
