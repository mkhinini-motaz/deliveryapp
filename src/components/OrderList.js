import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import OrderListItem from "./OrderListItem";
import {useSelector} from "react-redux";

export default function OrderList(props) {
    const orders = useSelector(state => state.OrderReducer.orders.data);

    return <View style={styles.container}>
        <Text>111</Text>
        {orders.map(order => <OrderListItem key={order.id} order={order} />)}
        <Text>222</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
