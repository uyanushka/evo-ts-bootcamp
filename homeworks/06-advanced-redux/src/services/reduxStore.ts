import {Action, AnyAction, applyMiddleware, combineReducers, createStore, Middleware} from 'redux'
import {BasketState, Pizza, State} from "../types";
import {BasketAction, PizzaListAction, PizzaViewedAction} from "./reduxActions";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {getPizza} from "./api";

const initialBasketState: BasketState = []
const initialPizzaListState: Pizza[] = []

const basketReducer = (state: BasketState = initialBasketState, _: BasketAction | Action): BasketState => state;

export const thunkLoadPizzas = (): ThunkAction<void, RootState, {}, AnyAction> => {
    return async function (dispatch: ThunkDispatch<State, void, AnyAction>) {
        const pizzas = await getPizza();

        const pizzaViewed = (pizzaList: Pizza[]): PizzaViewedAction => ({
            type: "PIZZA_VIEWED",
            eventName: "PIZZA_VIEWED",
            pizzaList: pizzaList,
        });

        dispatch(pizzaViewed(pizzas.items));
    };
}

export const pizzaListReducer = (state: Pizza[] = initialPizzaListState, action: PizzaListAction): Pizza[] => {
    switch (action.type) {
        case "PIZZA_VIEWED":
            return action.pizzaList;
        default:
            return state;
    }
}

export const localLogging: Middleware<{}, State> = _store => next => action => {
    console.log(action);
    return next(action);
}

export const remoteLogging: Middleware<{}, State> = _store => next => action => {
    fetch('http://localhost:3001/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action),
    }).then((json) => {
        console.log(json);
    }).catch((ex) => {
        console.log(ex)
    });

    return next(action);
}

export const store = createStore(
    combineReducers<State, AnyAction>({
        pizza: pizzaListReducer,
        basket: basketReducer,
    }),
    applyMiddleware(thunk, localLogging, remoteLogging)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
