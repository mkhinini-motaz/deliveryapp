import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import {getOrders} from "../store/actions";
import {useDispatch} from "react-redux";
import OrderList from "../components/OrderList";

export default function OrdersListScreen(props) {
    const dispatch = useDispatch();
    React.useEffect(() => dispatch(getOrders({})), [ dispatch ]);

    return (
        <View style={styles.screen}>
            <OrderList />
        </View>
    );
}

const styles = StyleSheet.create({

});
