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


export function attemptShopUserLogout() {
    return function(dispatch) {
        dispatch(setShopUserLogoutIsLoading(true));
        AsyncStorage.setItem('shop_user_access_token', '');

        dispatch(shopUserLogoutSuccess());
        dispatch(setShopUserLogoutIsLoading(false));
    };
}

export function attemptShopUserLogin({ phone, password })  {
    return function(dispatch) {
        dispatch(setShopUserLoginIsLoading(true));
        axios.post(BASE_SHOP_API_URL + '/login', { phone, password })
            .then(response => {
                AsyncStorage.setItem('shop_user_access_token', response.data.data.access_token)
                    .then(() => {
                        dispatch(shopUserLoginSuccess(response.data.data));
                        dispatch(setShopUserLoginIsLoading(false));
                    });
            }).catch((error) => {
// TODO: snackbar message
            dispatch(setShopUserLoginIsLoading(false));
        })
    }
}

export function fetchShopUserProfile()  {
    return function(dispatch) {
        AsyncStorage.getItem('shop_user_access_token').then(accessToken => {
            axios.get(BASE_SHOP_API_URL + '/profile', { headers: { Authorization: 'Bearer ' + accessToken } }).then(response => {
                dispatch(shopUserLoginSuccess(response.data.data));
            });
        });
    }
}
