import React from "react";
import * as R from "ramda";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {store, thunkLoadPizzas} from "../services/reduxStore";
import {Pizza, State} from "../types";
import {addPizzaToBasket, removePizzaFromBasket, selectPizza} from "../services/reduxActions";
import {getPizza} from "../services/api";

const dispatch = store.dispatch as ThunkDispatch<State, {}, AnyAction>

export function useApp() {
    const [pizza, setPizza] = React.useState<Pizza[]>([]);
    const [basket, setBasket] = React.useState<Pizza[]>([]);

    React.useEffect(() => {
        dispatch(thunkLoadPizzas())
        getPizza().then(pizzas => setPizza(pizzas.items));
    }, []);

    const plusPizzaBucket = React.useCallback((id: string) => {
        const p = pizza.filter(x => x._id === id)[0];

        dispatch(addPizzaToBasket(p.name, p.price));
        dispatch(selectPizza(p.name, p.price));

        setBasket([...basket, p]);
    }, [pizza, basket]);

    const minusPizzaBucket = React.useCallback((id: string) => {
        const idx = R.findLastIndex((x: Pizza) => x._id === id)(basket);

        if (idx !== -1) {
            dispatch(removePizzaFromBasket(basket[idx].name, basket[idx].price));
            setBasket(R.remove(idx, 1, basket));
        }
    }, [basket]);

    const validBasket = R.compose(
        R.values,
        R.mapObjIndexed((value: Pizza[]) => {
            return value.reduce((acc, p) => {
                return {
                    ...p,
                    price: acc.price + p.price,
                    count: acc.count + 1,
                };
            }, {count: 0, price: 0});
        }),
        R.groupBy((x: Pizza) => x._id),
    )(basket);

    return {
        totalPrice: validBasket.reduce((acc, p: Pizza) => acc + p.price, 0),
        pizza,
        bucket: validBasket,
        plusPizzaBucket,
        minusPizzaBucket,
    };
}
