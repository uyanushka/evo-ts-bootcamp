import {Action} from "redux";
import {BalanceAction} from "./consts";

interface PayloadAction {
    payload: number;
}

export interface UpdateBalance extends Action, PayloadAction {
    type: BalanceAction.update_balance;
}

export interface Debit extends Action, PayloadAction {
    type: BalanceAction.debit;
}

export interface Credit extends Action, PayloadAction {
    type: BalanceAction.credit;
}

export interface SetBalanceWithTax extends Action, PayloadAction {
    type: BalanceAction.set_balance_with_tax;
}

export type BalanceActions = UpdateBalance | Debit | Credit | SetBalanceWithTax;
