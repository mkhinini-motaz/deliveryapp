import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OrdersListScreen from "../screens/OrdersListScreen";
import OrdersMapScreen from "../screens/OrdersMapScreen";

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigator(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="OrdersMap" component={OrdersMapScreen} />
            <Tab.Screen name="OrdersList" component={OrdersListScreen} />
        </Tab.Navigator>
    );
}
