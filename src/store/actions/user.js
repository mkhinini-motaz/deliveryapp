import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_SHOP_API_URL } from './../../constants';
import {
    SHOP_USER_LOGIN_SUCCESS,
    SHOP_USER_LOGOUT_SUCCESS,
    SHOP_USER_PROFILE_UPDATE_SUCCESS,
    SET_SHOP_USER_LOGIN_IS_LOADING, SET_SHOP_USER_LOGOUT_IS_LOADING,
    SET_SHOP_USER_PROFILE_UPDATE_IS_LOADING
} from './types';

export function shopUserLoginSuccess(shopUser) {
    return { type: SHOP_USER_LOGIN_SUCCESS, payload: shopUser };
}

export function shopUserProfileUpdateSuccess(updatedShopUser) {
    return { type: SHOP_USER_PROFILE_UPDATE_SUCCESS, payload: updatedShopUser };
}

export function setShopUserLoginIsLoading(status) {
    return { type: SET_SHOP_USER_LOGIN_IS_LOADING, payload: status };
}

export function setShopUserLogoutIsLoading(status) {
    return { type: SET_SHOP_USER_LOGOUT_IS_LOADING, payload: status };
}

export function setShopUserProfileUpdateIsLoading(status) {
    return { type: SET_SHOP_USER_PROFILE_UPDATE_IS_LOADING, payload: status };
}

export function shopUserLogoutSuccess() {
    return { type: SHOP_USER_LOGOUT_SUCCESS };
}


export async function attemptShopUserLogout() {
    return async function(dispatch) {
        dispatch(setShopUserLogoutIsLoading(true));
        await AsyncStorage.setItem('shop_user_access_token', '');

        dispatch(shopUserLogoutSuccess());
        dispatch(setShopUserLogoutIsLoading(false));
    };
}

export async function attemptShopUserLogin({ phone, password })  {
    return async function(dispatch) {
        dispatch(setShopUserLoginIsLoading(true));
        try {
            const response = await axios.post(BASE_SHOP_API_URL + '/login', { phone, password });
            await AsyncStorage.setItem('shop_user_access_token', response.data.data.access_token);

            dispatch(shopUserLoginSuccess(response.data.data));
            dispatch(setShopUserLoginIsLoading(false));
        } catch (exception) {
// TODO: snackbar message
            dispatch(setShopUserLoginIsLoading(false));
        }
    }
}

export async function fetchShopUserProfile()  {
    return async function(dispatch) {
        try {
            const accessToken = await AsyncStorage.getItem('shop_user_access_token', response.data.data.access_token);
            const response    = await axios.get(BASE_SHOP_API_URL + '/profile', { headers: { Authorization: 'Bearer ' + accessToken } });
            dispatch(shopUserLoginSuccess(response.data.data));
        } catch (exception) {
// TODO: snackbar message
        }
    }
}
