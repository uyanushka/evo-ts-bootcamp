import React from 'react';
import './App.css';
import {compose, createStore, Reducer} from "redux";
import {BalanceAction} from "./consts";
import {BalanceActions} from "./types";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer: Reducer<number, BalanceActions> = (state: number = 0, action: BalanceActions) => {
    switch (action.type) {
        case BalanceAction.update_balance:
            return action.payload;
        case BalanceAction.debit:
            return state - action.payload;
        case BalanceAction.credit:
            return state + action.payload;
        case BalanceAction.set_balance_with_tax:
            return state * (1 - action.payload / 100);
        default:
            return state;
    }
};

const actions: BalanceActions[] = [
    {type: BalanceAction.update_balance, payload: 1000.0},
    {type: BalanceAction.credit, payload: 200.0},
    {type: BalanceAction.credit, payload: 100.0},
    {type: BalanceAction.set_balance_with_tax, payload: 14.0},
    {type: BalanceAction.debit, payload: 250.0},
    {type: BalanceAction.update_balance, payload: 1000.0},
];

const store = createStore(reducer, undefined, composeEnhancers());

actions.forEach((action) => store.dispatch(action));

function App() {
    return (
        <div className="App">
            App to test redux store
        </div>
    );
}

export default App;
