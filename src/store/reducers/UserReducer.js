import { SET_SHOP_USER_LOGIN_IS_LOADING, SET_SHOP_USER_PROFILE_UPDATE_IS_LOADING, SHOP_USER_LOGIN_SUCCESS, SHOP_USER_LOGOUT_SUCCESS, SHOP_USER_PROFILE_UPDATE_SUCCESS, } from "../actions";

const initialUserReducerState = {
    authShopUser: { },
    isLoggedIn:              false,
    shopUserLoginIsLoading:  false,
    shopUserLogoutIsLoading: false,
    shopUserProfileUpdateIsLoading: false,
};

export default function(state = initialUserReducerState, action) {
    if (action.type === SHOP_USER_LOGIN_SUCCESS) {
        return { ...state, authShopUser: action.payload, isLoggedIn: true };
    }

    if (action.type === SHOP_USER_LOGOUT_SUCCESS) {
        return { ...state, authShopUser: {}, isLoggedIn: false };
    }

    if (action.type === SHOP_USER_PROFILE_UPDATE_SUCCESS) {
        return { ...state, authShopUser: action.payload }
    }

    if (action.type === SET_SHOP_USER_LOGIN_IS_LOADING) {
        return { ...state, shopUserLoginIsLoading: action.payload };
    }

    if (action.type === SET_SHOP_USER_PROFILE_UPDATE_IS_LOADING) {
        return { ...state, shopUserLogoutIsLoading: action.payload };
    }

    return state;
}
