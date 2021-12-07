import React from 'react';
import { useDispatch } from "react-redux";
import io from "socket.io-client";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrdersListScreen from "../screens/OrdersListScreen";
import OrdersMapScreen from "../screens/OrdersMapScreen";
import {BASE_SHOP_API_URL, BASE_WS_URL} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getCurrentOrders, shopUserLoginSuccess } from "../store/actions";

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigator(props) {
    const dispatch = useDispatch();
    const socket = io(BASE_WS_URL, { transports : ['websocket'] });
    socket.on('order_update', (payload) => {
        dispatch(getCurrentOrders({}));
    });
    AsyncStorage.getItem('shop_user_access_token')
        .then(accessToken => {
            socket.emit('login', { authToken: accessToken });
        });

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabelStyle: { fontSize: 15 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'OrdersList':
                            iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline';
                            break;
                        case 'OrdersMap':
                            iconName = focused ? 'map' : 'map-outline';
                            break;
                        default:
                            return '';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })
        }>
            <Tab.Screen name="OrdersList"
                        component={OrdersListScreen}
                        options={{ title: 'Commandes' }} // TODO: translate

            />
            <Tab.Screen name="OrdersMap"
                        component={OrdersMapScreen}
                        options={{ title: 'Map' }} // TODO: translate
            />
        </Tab.Navigator>
    );
}
