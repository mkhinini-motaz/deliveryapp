import React from 'react';
import { useDispatch } from "react-redux";
import io from "socket.io-client";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OrdersListScreen from "../screens/OrdersListScreen";
import OrdersMapScreen from "../screens/OrdersMapScreen";
import {BASE_SHOP_API_URL, BASE_WS_URL} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {shopUserLoginSuccess} from "../store/actions";

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigator(props) {
    const dispatch = useDispatch();
    const socket = io(BASE_WS_URL);



    AsyncStorage.getItem('shop_user_access_token')
        .then(accessToken => {
            socket.emit()
        });

    return (
        <Tab.Navigator>
            <Tab.Screen name="OrdersList" component={OrdersListScreen} />
            <Tab.Screen name="OrdersMap" component={OrdersMapScreen} />
        </Tab.Navigator>
    );
}
