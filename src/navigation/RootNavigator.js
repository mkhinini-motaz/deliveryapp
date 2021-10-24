import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";

import AuthenticatedNavigator from "./AuthenticatedNavigator";
import LoginNavigator from "./LoginNavigator";
import { THEME } from "../constants";
export default function RootNavigator(props) {
    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn);

    return (
        <NavigationContainer theme={THEME}>
            { isLoggedIn ?
                <AuthenticatedNavigator /> :
                <LoginNavigator />
            }
        </NavigationContainer>
    );
}
