import React from 'react';
import { View, StyleSheet } from "react-native";
import { getCurrentOrders } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/Order/OrderList";
import OrderStatusUpdateDialog from "../components/Order/OrderStatusUpdateDialog";

export default function OrdersListScreen(props) {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.OrderReducer.orders.data);
    const orderStatusEditDialogProps = useSelector((state) => state.OrderStatusEditDialogReducer);

    React.useEffect(() => dispatch(getCurrentOrders({})), [ dispatch ]);

    return (
        <View style={styles.screen}>
            <OrderList orders={orders} />
            <OrderStatusUpdateDialog {...orderStatusEditDialogProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});
