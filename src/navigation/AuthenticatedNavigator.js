import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrdersListScreen from "../screens/OrdersListScreen";
import OrdersMapScreen from "../screens/OrdersMapScreen";

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigator(props) {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
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
        })}>
            <Tab.Screen name="OrdersList"
                        component={OrdersListScreen}

            />
            <Tab.Screen name="OrdersMap"
                        component={OrdersMapScreen}
            />
        </Tab.Navigator>
    );
}
