import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { List } from 'react-native-paper';
import OrderListItem from "./OrderListItem";
import {useSelector} from "react-redux";

export default function OrderList(props) {
    const orders = useSelector(state => state.OrderReducer.orders);

    return (
        <View>
            <List.Section>
                {orders.map(order => <OrderListItem key={order.id} order={order} />)}
            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({

});
