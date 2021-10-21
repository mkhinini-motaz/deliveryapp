import React from 'react';
import { ScrollView, View, StyleSheet } from "react-native";
import OrderListItem from "./OrderListItem";
import {useSelector} from "react-redux";

export default function OrderList(props) {

    return <View style={styles.container}>
        <ScrollView>
            {props.orders.map(order => <OrderListItem key={'order_' + order.id} order={order} />)}
        </ScrollView>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
