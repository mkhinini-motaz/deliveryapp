import axios from "axios";

import { BASE_SHOP_API_URL } from "../../constants";
import { SET_ORDERS, SET_ORDERS_ARE_LOADING, } from './types';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function setOrdersAreLoading(status) {
    return { type: SET_ORDERS_ARE_LOADING, payload: status };
}

export function setOrders(orders) {
    return { type: SET_ORDERS, payload: orders };
}

export function getOrders({ page = 1, perPage = 20, orderBy = 'created_at', orderDirection = 'desc' })  {
    return function(dispatch) {
        dispatch(setOrdersAreLoading(true));
        const params = { page, perPage, orderBy, orderDirection };

        AsyncStorage.getItem('shop_user_access_token').then(accessToken => {
            axios.get(BASE_SHOP_API_URL + '/order/current', { params, headers: { Authorization: 'Bearer ' + accessToken }  })
                .then(response => {
console.log('orders response : ', response.data)
                    dispatch(setOrders(response.data));
                    dispatch(setOrdersAreLoading(false));
                })
                .catch(error => {
console.log('orders error : ', { ...error}, BASE_SHOP_API_URL)
                    dispatch(setOrdersAreLoading(false));
                })
            });
    }
}
