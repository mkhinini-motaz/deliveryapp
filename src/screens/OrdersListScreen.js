import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import {getOrders} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import OrderList from "../components/Order/OrderList";

export default function OrdersListScreen(props) {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.OrderReducer.orders.data);

    React.useEffect(() => dispatch(getOrders({})), [ dispatch ]);

    return (
        <View style={styles.screen}>
            <OrderList orders={orders} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
