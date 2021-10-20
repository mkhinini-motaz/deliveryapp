import axios from "axios";

import { BASE_SHOP_API_URL } from "../../constants";
import { SET_ORDERS, SET_ORDERS_ARE_LOADING, } from './types';

export function setOrdersAreLoading(status) {
    return { type: SET_ORDERS_ARE_LOADING, payload: status };
}

export function setOrders(orders) {
    return { type: SET_ORDERS, payload: orders };
}

export async function getOrders({ page = 1, perPage = 20, orderBy = 'created_at', orderDirection = 'desc' })  {
    return async function(dispatch) {
        dispatch(setOrdersAreLoading(true));
        const params = { page, perPage, orderBy, orderDirection };

        try {
            const response = await axios.get(BASE_SHOP_API_URL + '/order/current', { params })
            dispatch(setOrders(response.data));
            dispatch(setOrdersAreLoading(false));
        } catch (exception) {
            dispatch(setOrdersAreLoading(false));
        }
    }
}
