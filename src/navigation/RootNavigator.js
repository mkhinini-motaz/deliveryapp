import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";

import AuthenticatedNavigator from "./AuthenticatedNavigator";
import LoginNavigator from "./LoginNavigator";

export default function RootNavigator(props) {
    const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn);

    return (
        <NavigationContainer>
            { isLoggedIn ?
                <AuthenticatedNavigator /> :
                <LoginNavigator />
            }
        </NavigationContainer>
    );
}
