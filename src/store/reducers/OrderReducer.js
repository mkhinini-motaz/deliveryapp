import {
    SET_ORDERS, SET_ORDERS_ARE_LOADING,
} from "../actions";

const initialOrderReducerState = {
    orders: { data: [] },
    ordersAreLoading:  false,
};

export default function(state = initialOrderReducerState, action) {
    if (action.type === SET_ORDERS) {
        return { ...state, orders: action.payload, };
    }

    if (action.type === SET_ORDERS_ARE_LOADING) {
        return { ...state, ordersAreLoading: action.payload };
    }

    return state;
}
